<?php
    class FileSpec
    {
        private $fileName;
        private $size;
        private $type;
        private $tmpName;
        private $error;

        public function __construct($fileName, $size, $type, $tmpName, $error = '')
        {
            $this->fileName = $fileName;
            $this->size = $size;
            $this-> tmpName = $tmpName;
            $this -> error = $error;
        }
    }

?>
