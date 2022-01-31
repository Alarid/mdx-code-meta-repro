import path from "path"
import fs from "fs/promises"
import { bundleMDX } from "mdx-bundler"
import { remarkMdxCodeMeta } from "remark-mdx-code-meta"

export async function bundle() {
  const file = await fs.readFile(
    path.join(__dirname, "..", "content", "test.mdx")
  )
  const mdx = file.toString()
  return bundleMDX({
    source: mdx,
    xdmOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxCodeMeta,
      ]
      return options
    },
  })
}
