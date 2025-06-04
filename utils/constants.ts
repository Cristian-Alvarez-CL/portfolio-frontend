import path from "path"
import {
  PdfFileType,
  CsvFileType,
  MessageType,
  AttachmentValidationType,
  type PdfFileTypeMap,
  type CsvFileTypeMap,
} from "./types"

// ==========================================
// CONFIGURACIÓN DE RUTAS
// ==========================================

export const PATHS = {
  DATA_DIRECTORY: path.join(process.cwd(), "resources", "data_msj"),
  DATA_FILENAME: "data_msj_simple.json",
  MULTIPLE_DATA_FILENAME: "data_msj_multiple.json",
  USER_DATA_MULTIPLE_FILENAME: "data_user_multiple.json",
  USER_DATA_SIMPLE_FILENAME: "data_user_simple.json",
  FILES_DIRECTORY: path.join(process.cwd(), "resources", "files"),
  PDF_DIRECTORY: path.join(process.cwd(), "resources", "files", "pdf"),
  CSV_DIRECTORY: path.join(process.cwd(), "resources", "files", "csv"),
} as const

// ==========================================
// EXPRESIONES REGULARES
// ==========================================

export const REGEX = {
  ROW_PATTERN: /(PT-SER\d{5}-\d{5})([\s\S]*?)(Etapa de [^\d]+)(\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2})/,
  PREVIEW_HEADER: /Previsualización\s*\[PA\]/i,
  PREVIEW_FOOTER: /\s*Aceptar\s*$/i,
} as const

// ==========================================
// CONFIGURACIÓN DE ARCHIVOS
// ==========================================

/**
 * Mapeo de tipos de archivo PDF a su configuración
 */
export const PDF_FILE_CONFIG: PdfFileTypeMap = {
  [PdfFileType.SIMPLE_SIGNATURE]: {
    fileName: "FirmaSimple.pdf",
    validationType: AttachmentValidationType.SIMPLE_SIGNATURE,
  },
  [PdfFileType.ADVANCED_SIGNATURE]: {
    fileName: "Documento1FEA.pdf",
    validationType: AttachmentValidationType.ADVANCED_SIGNATURE,
  },
} as const

/**
 * Mapeo de tipos de archivo CSV a su configuración
 */
export const CSV_FILE_CONFIG: CsvFileTypeMap = {
  [CsvFileType.SIMPLE_MESSAGE]: {
    fileName: "message-simple.csv",
    validationType: "Archivo CSV cargado correctamente",
    tipoMensaje: MessageType.SIMPLE,
  },
  [CsvFileType.MASSIVE_MESSAGE]: {
    fileName: "message-massive.csv",
    validationType: "Archivo CSV cargado correctamente",
    tipoMensaje: MessageType.MASSIVE,
  },
} as const

// ==========================================
// CONFIGURACIÓN LEGACY (COMPATIBILIDAD)
// ==========================================

/**
 * @deprecated Usar PDF_FILE_CONFIG en su lugar
 */
export const FILE_TYPES = {
  [PdfFileType.SIMPLE_SIGNATURE]: PDF_FILE_CONFIG[PdfFileType.SIMPLE_SIGNATURE],
  [PdfFileType.ADVANCED_SIGNATURE]: PDF_FILE_CONFIG[PdfFileType.ADVANCED_SIGNATURE],
} as const

/**
 * @deprecated Usar CSV_FILE_CONFIG en su lugar
 */
export const CSV_FILE_TYPES = {
  [CsvFileType.SIMPLE_MESSAGE]: CSV_FILE_CONFIG[CsvFileType.SIMPLE_MESSAGE],
  [CsvFileType.MASSIVE_MESSAGE]: CSV_FILE_CONFIG[CsvFileType.MASSIVE_MESSAGE],
} as const
