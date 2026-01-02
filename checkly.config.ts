const config = defineConfig({
  checks: {
    // A glob pattern that matches the Checks inside your repo.
    checkMatch: "**/__checks__/**/*.check.ts",
  },
})
