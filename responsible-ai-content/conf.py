# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'CHAI Responsible AI Content'
copyright = '2025, Coalition for Health AI'
author = 'Coalition for Health AI'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['sphinx.ext.mathjax', 'sphinx_rtd_theme']

templates_path = ['_templates']
exclude_patterns = []



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_rtd_theme'
html_context = {
    "display_github": True,
    "github_user": "coalition-for-health-ai",
    "github_repo": "responsible-ai-content",
    "github_version": "main",
    "conf_py_path": "/responsible-ai-content/",
}
html_static_path = ['_static']
html_logo = "_static/logo.png"
html_show_sphinx = False

latex_logo = "_static/logo.png"
latex_elements = {
  'extraclassoptions': 'openany,oneside'
}
