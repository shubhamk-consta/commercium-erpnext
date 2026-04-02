from setuptools import setup, find_packages 

try:
    from pip._internal.req import parse_requirements
except ImportError:
    from pip.req import parse_requirements  
import re,ast

_version_re = re.compile(r'__version__\s+=\s+(.*)')

with open('commercium/__init__.py', 'rb') as f:
    version = str(ast.literal_eval(_version_re.search(
        f.read().decode('utf-8')).group(1)))

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

setup(
	name='commercium',
	version=version,
	description='Commercium Connector for ERPNext',
	author='Shubham Vajpayee',
	author_email='help@mycommercium.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)