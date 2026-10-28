# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'CHAI Responsible AI Content'
copyright = '2025, Coalition for Health AI'
author = 'Coalition for Health AI'
try:
    from subprocess import check_output
    release = check_output(['git', 'rev-parse', '@'])
    release = release.decode().strip()
except Exception:
    release = 'main'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['sphinx.ext.mathjax', 'sphinx_rtd_theme', 'nbsphinx']

templates_path = ['_templates']
exclude_patterns = []

# -- nbsphinx configuration --------------------------------------------------

# Use saved notebook outputs; avoids extra runtime deps on Read the Docs.
nbsphinx_execute = 'never'

nbsphinx_prolog = r"""
{% set docname = env.doc2path(env.docname, base=None)|string %}

.. raw:: html

    <div class="admonition note">
      This page was generated from
      <a class="reference external" href="https://github.com/coalition-for-health-ai/responsible-ai-content/blob/{{ env.config.release|e }}/responsible-ai-content/{{ docname|e }}">{{ docname|e }}</a>.
      <a href="{{ env.docname.split('/')|last|e + '.ipynb' }}" class="reference download internal" download>Download notebook</a>.
    </div>
"""

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

# -- Analytics (cookie consent + Microsoft Clarity) --------------------------
# Clarity loads only after the visitor clicks Accept in the cookie banner, and
# only on the hosts below. See _static/chai-analytics.js for the events.
# CLARITY_PROJECT_ID / CLARITY_HOSTS override these (e.g. for a local test).

import os

clarity_project_id = os.environ.get('CLARITY_PROJECT_ID', 'q7sz5dhg7b')
clarity_hosts = os.environ.get('CLARITY_HOSTS', 'rai-content.chai.org')

html_css_files = ['chai-analytics.css']
html_js_files = [
    ('chai-analytics.js', {
        'defer': 'defer',
        'data-clarity-project': clarity_project_id,
        'data-clarity-hosts': clarity_hosts,
        'data-privacy-url': 'https://registry.chai.org/privacy-policy',
    }),
]

latex_logo = "_static/logo.png"
latex_elements = {
  'extraclassoptions': 'openany,oneside'
}

# -- Page-specific layout exceptions -----------------------------------------

_UNIFIED_FRAMEWORK_PAGE = 'agentic/chai_unified_framework_v2'


def _html_page_context(app, pagename, templatename, context, doctree):
    if pagename != _UNIFIED_FRAMEWORK_PAGE:
        return
    css = '_static/chai_unified_framework_layout.css'
    context.setdefault('css_files', [])
    if css not in context['css_files']:
        context['css_files'].append(css)


def setup(app):
    app.connect('html-page-context', _html_page_context)
