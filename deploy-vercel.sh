#!/bin/bash

echo "🚀 Preparando arquivos para deploy no Vercel..."

# Criar pasta temporária
mkdir -p /tmp/turma371-deploy
cd /tmp/turma371-deploy

# Copiar arquivos necessários
echo "📦 Copiando arquivos..."
cp -r /app/frontend/src ./src
cp -r /app/frontend/public ./public
cp /app/frontend/package.json ./package.json
cp /app/frontend/vercel.json ./vercel.json
cp /app/frontend/craco.config.js ./craco.config.js 2>/dev/null || echo "module.exports = {};" > ./craco.config.js
cp /app/frontend/tailwind.config.js ./tailwind.config.js
cp /app/frontend/postcss.config.js ./postcss.config.js 2>/dev/null || echo "module.exports = {plugins: {tailwindcss: {},autoprefixer: {},},};" > ./postcss.config.js

# Criar .gitignore
cat > .gitignore << 'GITIGNORE'
node_modules
build
.env.local
.DS_Store
GITIGNORE

# Criar README
cat > README.md << 'README'
# Turma 371 - ETEP

Site oficial da Turma 371 de Informática da ETEP Portão.

## Deploy

Este projeto está configurado para deploy no Vercel.

## Desenvolvido com
- React
- Tailwind CSS
- shadcn/ui
README

echo "✅ Arquivos preparados em: /tmp/turma371-deploy"
echo ""
echo "📁 Próximo passo:"
echo "1. Compactar a pasta para download"

# Criar arquivo zip
cd /tmp
zip -r turma371-site.zip turma371-deploy -q

echo "✅ Arquivo criado: /tmp/turma371-site.zip"
echo "📦 Tamanho: $(du -h /tmp/turma371-site.zip | cut -f1)"

