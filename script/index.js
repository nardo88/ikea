'use ctrict'
import {catalog} from './catalog.js'
import generateCatalog from './generateCatalog.js'
import generateFooter from './generateFooter.js'
import generateSubCatalog from './generateSubCatalog.js'
import generateHeader from './generateHeader.js'
import {loadData} from './loadData.js'

generateHeader()
generateSubCatalog()
generateFooter()
generateCatalog()
catalog()

loadData()
