import { Config } from "bili";

const config: Config = {
  banner: false,
  input: "./src/index.ts",
  output: {
    format: ["es", "cjs", "umd", "umd-min"],
    moduleName: "PowerfulMap",
    sourceMap: false,
    sourceMapExcludeSources: true,
    dir: "dist",
  },
  plugins: {
    typescript2: {
      clean: true,
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true,
    },
  },
};

export default config;
