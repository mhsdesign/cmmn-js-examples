import esbuild from "esbuild";

esbuild.build({
    entryPoints: [
        "./src/main.ts",
        "./src/main.css",
        "./src/index.html",
    ],
    outdir: "./dist",
    bundle: true,
    minify: true,
    loader: {
        ".html": "copy",
        ".cmmn": "text",
        ".svg": "text",
        ".eot": "text",
    }
})
