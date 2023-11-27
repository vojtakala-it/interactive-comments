all: help

help:
	@echo "------------------------ Available make commands ------------------------\n"
	@egrep -o '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sed 's/:.*##/ -/;s/^/ /'

install: ## Install dependencies from package.json
	@echo "------------------------ Installing dependencies from package.json ------------------------\n"
	npm i

run: ## Run the project locally
	@echo "------------------------ Running project locally ------------------------\n"
	npm run dev

build: ## Build the project
	@echo "------------------------ Building project ------------------------\n"
	npm run build

less: ## TESTS: Run stylelint on all Less files
	@echo "------------------------ Running lint on all less files ------------------------\n"
	npx stylelint "**/*.less"

lint: ## TESTS: Run lint on all js, jsx files
	@echo "------------------------ Running lint on all js, jsx files ------------------------\n"
	npm run lint
