import React from "react"
import { useLoaderData } from "remix"
import type { LoaderFunction } from "remix"
import { getMDXComponent } from "mdx-bundler/client"

import { bundle } from "~/utils/mdx.server"

export const loader: LoaderFunction = async () => {
  return bundle()
}

export default function Index() {
  const { code, frontmatter } = useLoaderData()
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return <Component />
}
