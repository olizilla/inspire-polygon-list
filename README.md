# INSPIRE polygon download file list

You want to download all the INSPIRE polygons, but they are split up into 300+ separate zip files.
https://www.gov.uk/government/collections/download-inspire-index-polygons

Install `inspire-polygon-list` and run it to get all the urls in one place.

```sh
npm i -g inspire-polygon-list

inspire-polygon-list

# http://data.inspire.landregistry.gov.uk/Abertawe_-_Swansea.zip
# http://data.inspire.landregistry.gov.uk/Adur.zip
# http://data.inspire.landregistry.gov.uk/Allerdale.zip
# http://data.inspire.landregistry.gov.uk/Amber_Valley.zip
# http://data.inspire.landregistry.gov.uk/Arun.zip
# ...

```

From the list you could then use `wget` or similar to download them all.

```sh
wget $(inspire-polygon-list)
```

