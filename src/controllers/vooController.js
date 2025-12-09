var vooModel = require("../models/vooModel");


function buscarKpi1(req, res) {
  var fkEmpresa = req.params.id;

  vooModel.buscarKpi1(fkEmpresa).then((resultado) => {
    if (resultado.length > 0) {
        vooModel.buscarKpi1(fkEmpresa).then((resultado) => {
        res.status(201).json(resultado);
      });
    } else {
        res
        .status(404)
        .json({ mensagem: `Kpi 1 não encotrada no banco` });
    }
  });
}

function buscarKpi2(req, res) {
  var fkEmpresa = req.params.id;

  vooModel.buscarKpi2(fkEmpresa).then((resultado) => {
    if (resultado.length > 0) {
        vooModel.buscarKpi2(fkEmpresa).then((resultado) => {
        res.status(201).json(resultado);
      });
    } else {
        res
        .status(404)
        .json({ mensagem: `Kpi 2 não encotrada no banco` });
    }
  });
}

function buscarKpi3(req, res) {
  var fkEmpresa = req.params.id;

  vooModel.buscarKpi3(fkEmpresa).then((resultado) => {
    if (resultado.length > 0) {
        vooModel.buscarKpi3(fkEmpresa).then((resultado) => {
        res.status(201).json(resultado);
      });
    } else {
        res
        .status(404)
        .json({ mensagem: `Kpi 3 não encotrada no banco` });
    }
  });
}

function buscarKpi4(req, res) {
  var fkEmpresa = req.params.id;

  vooModel.buscarKpi4(fkEmpresa).then((resultado) => {
    if (resultado.length > 0) {
        vooModel.buscarKpi4(fkEmpresa).then((resultado) => {
        res.status(201).json(resultado);
      });
    } else {
        res
        .status(404)
        .json({ mensagem: `Kpi 4 não encotrada no banco` });
    }
  });
}


function buscarJustificativas(req, res) {
  var fkEmpresa = req.params.id;

  vooModel.buscarJustificativas(fkEmpresa).then((resultado) => {
    if (resultado.length > 0) {
        vooModel.buscarJustificativas(fkEmpresa).then((resultado) => {
        res.status(201).json(resultado);
      });
    } else {
        res
        .status(404)
        .json({ mensagem: `Justificativas não encotrada no banco` });
    }
  });
}

function buscarDesempenho(req, res) {
  var fkEmpresa = req.params.id;

  vooModel.buscarDesempenho(fkEmpresa).then((resultado) => {
    if (resultado.length > 0) {
        vooModel.buscarDesempenho(fkEmpresa).then((resultado) => {
        res.status(201).json(resultado);
      });
    } else {
        res
        .status(404)
        .json({ mensagem: `Desempenho não encotrado no banco` });
    }
  });
}

function buscarVoos(req, res) {
  var fkEmpresa = req.params.id;

  vooModel.buscarVoos(fkEmpresa).then((resultado) => {
    if (resultado.length > 0) {
        vooModel.buscarVoos(fkEmpresa).then((resultado) => {
        res.status(201).json(resultado);
      });
    } else {
        res
        .status(404)
        .json({ mensagem: `Voos não encotrados no banco` });
    }
  });
}

module.exports = {
    buscarKpi1,
    buscarKpi2,
    buscarKpi3,
    buscarKpi4,
    buscarJustificativas,
    buscarDesempenho,
    buscarVoos
    
}
