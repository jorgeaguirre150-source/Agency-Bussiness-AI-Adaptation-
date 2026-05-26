# Plan Financiero — Disciplina + Proyección + Decisiones

> Sin este doc, llegas a mes 4 con caja confusa y aceptas mal cliente "porque necesitas pagar la luz".
> Plan financiero = disciplina antes que ingreso.

---

## Setup inicial (Semana 1)

### Estructura legal y bancaria

- [ ] **Alta autónomo** en Hacienda (gratis, online en 30 min): modelo 036/037
- [ ] **IAE** epígrafe 845 (servicios técnicos de informática) o 766 (consultoría)
- [ ] **Cuenta bancaria operativa** (mejor que personal): N26 Business, BBVA Cero, Sabadell Bs Online
- [ ] **3 cuentas adicionales** (mismas o de otro banco):
  - Cuenta IVA (20% de cada factura)
  - Cuenta IRPF (15% de cada factura)
  - Cuenta colchón salida Mercedes (20% de cada factura)
- [ ] **Software facturación**: Holded, Quaderno o Anfix (~$15/mes). NO Excel.
- [ ] **Gestoría online**: Declarando, Quipu o gestoría tradicional ($60-100/mes)

### Coste inicial

| Concepto | Coste mes 1 | Coste mes 2+ |
|---|---|---|
| Alta autónomo + cuenta SS | €0 - €80 (tarifa plana) | €87/mes año 1 (€293 año 2) |
| Software facturación | €15 | €15 |
| Gestoría | €0 (alta gratis) | €60-100 |
| Tools negocio (Sales Nav, Apollo, etc.) | €0 fase 0 | €140 desde mes 3-4 |
| Hetzner VPS (para L2) | €0 | €5 desde mes 3 |
| **Total mes 1** | **€15-95** | |
| **Total mes 2-5** | | **€207-272** |
| **Total mes 6+** | | **€420-500** (con junior $1.5-2K extra) |

### Tarifa plana autónomo (España, vigente 2026)

Si nunca has sido autónomo: €87/mes los primeros 12 meses, €176/mes meses 13-24, después €293/mes (cuota mínima).

**Importante**: la tarifa plana se pierde si te das de baja y vuelves a alta. Una vez activada, mantente activado.

---

## Las 3 reservas obligatorias (regla del 55%)

De cada factura cobrada, **el 55% NO es tuyo**. Va a cuentas separadas la misma semana del cobro.

### Reserva 1 — IVA (20%)

- Recaudas 21% IVA en cada factura emitida en España (intracomunitario es 0%)
- Lo declaras y pagas trimestralmente (modelo 303)
- **Apartas 20% (no 21%)** porque sumas IVA deducible (compras tools)
- Trimestres: 1-20 abril (Q1), 1-20 julio (Q2), 1-20 octubre (Q3), 1-30 enero (Q4)

**Trampa**: si gastas el IVA pensando que es tuyo → trimestre siguiente no puedes pagar → recargos → desastre.

### Reserva 2 — IRPF (15%)

- Cliente retiene 15% IRPF en cada factura (autónomo profesional)
- Tú no recibes ese dinero, lo paga Hacienda anualmente como adelanto de tu IRPF
- Pero al final del año, en declaración: si tus gastos son <30%, posiblemente DEBES más
- **Apartas 15% adicional** por seguridad (te lo devuelven si sobra)

**Cliente B2B**: factura SIN retención si el cliente lo solicita (algunos lo hacen). En ese caso aparta el 30% completo (es lo que pagarías).

### Reserva 3 — Colchón salida Mercedes (20%)

- Target: $25-30K en cuenta separada antes de dejar Mercedes
- Apartas 20% de cada factura
- Esta cuenta NO se toca hasta el día que confirmas salida

**Cuenta separada físicamente**: cuenta en banco distinto al operativo. Difícil acceder = difícil gastar impulsivamente.

---

## Lo que SÍ es tuyo (45% de cada factura)

Ese 45% es:
- Coste operativo del negocio (tools, gestoría, junior) ~10-15%
- Tu sueldo personal ~30-35%

Es decir, de una factura de $400 cobrada:
- $80 → cuenta IVA
- $60 → cuenta IRPF
- $80 → cuenta colchón
- $40 → operativo (tools, etc.)
- **$140 → tú** (cuenta personal, comer, pagar alquiler, etc.)

Suena poco. **Es la realidad de fase 0**. Mejora cuando: escalas precios + reduces % gastos + delegas con margen.

---

## Proyección cashflow 12 meses

### Asunciones

- Sueldo Mercedes neto: €3.500/mes (mantienes 6-9 meses)
- Vives con €1.500-2.000/mes de gastos personales
- Tarifa plana autónomo año 1
- Reservas estrictas 55%

### Mes a mes (escenario realista)

| Mes | Clientes activos L1 | Clientes activos L2 | Facturación bruta | A reservas (55%) | Operativo | Tu sueldo neto del negocio | Total tu ingreso (Mercedes + negocio) |
|---|---|---|---|---|---|---|---|
| 1 | 1 | 0 | $400 | $220 | $50 | $130 | $3.630 |
| 2 | 3 | 0 | $1.600 | $880 | $100 | $620 | $4.120 |
| 3 | 5 | 0 | $2.800 | $1.540 | $200 | $1.060 | $4.560 |
| 4 | 7 | 1 (diag) | $3.700 | $2.035 | $250 | $1.415 | $4.915 |
| 5 | 9 | 1 (impl) | $5.600 | $3.080 | $2.000 (junior + tools) | $520 | $4.020 |
| 6 | 11 | 2 (impl+diag) | $6.400 | $3.520 | $2.200 | $680 | $4.180 |
| 7 | 14 | 3 (impl+mant) | $8.200 | $4.510 | $2.500 | $1.190 | **$4.690 sin Mercedes ya** |
| 8 | 17 | 4 (impl+mant) | $9.800 | $5.390 | $2.700 | $1.710 | $1.710 |
| 9 | 20 | 5 (mant) | $11.000 | $6.050 | $4.500 (2 juniors) | $450 | $450 ⚠️ |
| 10 | 23 | 7 | $13.500 | $7.425 | $4.700 | $1.375 | $1.375 |
| 11 | 26 | 9 | $16.000 | $8.800 | $4.900 | $2.300 | $2.300 |
| 12 | 30 | 12 | $19.500 | $10.725 | $5.300 | $3.475 | $3.475 |

### Lectura crítica

**Mes 5**: contratar junior reduce TU sueldo. **Eso es normal**. Inviertes para escalar.

**Mes 7-8**: aquí dejas Mercedes con MRR $8.200-9.800. Mes 9 puede tener bache (junior #2). Aguantas porque tienes el colchón.

**Mes 12**: $19.500 facturación, $3.475 tu sueldo neto. Suena poco para 30 clientes. **Es porque has invertido en sistema escalable**.

### Año 2 (proyección)

- MRR crece a $30-40K con cross-sell y vertical dental
- Tu sueldo neto: $7-10K/mes
- Considerar SL en mes 14-16 (mejor fiscalidad >$60K/año)

---

## Decisiones financieras críticas

### Decisión 1 — Cuándo subir precio L1 (web $400 → $500-600)

**Trigger**: 10 clientes web vendidos con 100% pagados sin friction.

**Mecánica**: nuevos prospectos cotizas $600. Clientes existentes mantienen $400.

**Impacto**: +30% margen sin más trabajo.

### Decisión 2 — Cuándo contratar primer junior

**Trigger**: 5 clientes activos en mantenimiento + 5h/semana ejecutando RRSS.

**Mecánica**: contratas freelancer 20h/sem a $1.500-2.000/mes.

**Impacto**: pierdes $500-1.000/mes inicialmente. Recuperas en mes 8 cuando con tiempo liberado cierras 3-5 clientes más.

### Decisión 3 — Cuándo subir precios L2

**Trigger**: 5 implementaciones cerradas con NPS≥8.

**Mecánica**:
- Diagnóstico $300 → $500
- Implementación $1.500 → $2.500
- Mantenimiento $200/mes → $350/mes

**Impacto**: +66% facturación por cliente L2 nuevo.

### Decisión 4 — Cuándo pasar de autónomo a SL

**Trigger**: facturación >$60K/año (€55K) consistente 3 meses.

**Razón**: en autónomo pagas IRPF progresivo (hasta 47% tramo alto). En SL pagas 25% Impuesto Sociedades + dividendos cuando los retires.

**Coste cambio**: ~€500-1.500 (notaría, gestoría, capital social $3.000 mínimo). Recuperable en 2-3 meses con el ahorro fiscal.

**Mecánica**: alta SL nueva, traspaso clientes (firmar contratos a la SL), baja autónomo. Tu gestoría lo hace en 2-3 semanas.

### Decisión 5 — Cuándo dejar Mercedes

**Condiciones (todas verdes simultáneas)**:
- [ ] MRR cobrado ≥ $8.500 por 3 meses seguidos
- [ ] Permanencia mantenimiento ≥ 70% (no se te van clientes)
- [ ] Colchón cuenta separada ≥ $25-30K
- [ ] Pipeline visible ≥ 8 leads calificados/mes
- [ ] Junior #1 contratado y entregando

**Si las 5 están verdes**: preavisas Mercedes 2 meses (cláusula contrato laboral típica). Mes siguiente al preaviso, full-time agencia.

---

## Gastos críticos que SÍ valen la pena (no recortes aquí)

| Gasto | Mes activación | Coste mes | Por qué SÍ |
|---|---|---|---|
| Gestoría | Mes 1 | €60-100 | Evita multas Hacienda x10 más caras |
| Software facturación | Mes 1 | €15 | Tiempo ahorrado + cumplimiento legal |
| Hetzner VPS | Mes 3 | €5 | Necesario para L2, ridícula la fricción |
| Sales Navigator | Mes 6 | $80 | ROI 10x si lo usas bien |
| Apollo + Instantly | Mes 6 | $70 | Pipeline L2 escalable |
| Junior RRSS | Mes 5 | $1.500-2.000 | Compras tu tiempo a $15-25/h |
| Coworking (cuando dejas Mercedes) | Mes 9 | $200-300 | Separación casa/trabajo crítica |

## Gastos que NO valen la pena (recorta aquí)

| Gasto | Coste mes | Por qué NO |
|---|---|---|
| Oficina propia | $500-1.500 | Trabajo desde casa o coworking flexible |
| Publicidad de pago fase 0 | $500-2.000 | Orgánico + outbound es más eficiente hasta tener caso de éxito |
| Curso "Cómo escalar tu agencia" | $200-500 | El conocimiento está en este repo + ejecutar |
| Asistente virtual antes del cliente #10 | $500/mes | Si no llenas 5h/sem de su tiempo = waste |
| Subscripciones SaaS no usadas | $50-200 acumulado | Audit cada 2 meses |

---

## Disciplina diaria/semanal

### Cada cobro (mismo día)

- Anotar factura en gestoría
- Transferir 20% IVA, 15% IRPF, 20% colchón a sus respectivas cuentas
- El 45% restante queda en cuenta operativa

### Cada lunes (5 min)

- Revisar saldo cuenta operativa
- ¿Cumple con próximos pagos del mes (gestoría, tools, junior)?
- Si no, ¿qué cliente debe (factura impagada)?

### Cada trimestre (1h con gestoría)

- Cierre IVA: pago modelo 303
- Cierre pagos a cuenta IRPF: modelo 130
- Comparar real vs proyección

### Cada año (medio día)

- Declaración renta personal
- Cierre fiscal (modelo 100)
- Recibes devolución IRPF si has retenido más de lo debido
- Planificación fiscal año siguiente

---

## Escenarios de stress

### Escenario 1: 3 meses sin cerrar nuevos clientes

**Causa**: bajada estacional, script roto, mercado saturado puntual.

**Plan**:
- Tu cuenta operativa debe tener 2 meses de gastos en buffer (~€500-1.000) → estás OK
- Aceleras outreach en otros canales (LinkedIn + email frío)
- NO bajas precios. NO aceptas cliente tóxico.
- Si en mes 4 sigue sin tracción: revisar oferta completa, no solo precio.

### Escenario 2: Cliente importante se va (alto LTV)

**Causa**: cierre del negocio, cambio de proveedor, queja no resuelta.

**Plan**:
- 1 mes de aviso (cláusula contractual)
- Mes -1: review cliente, intentar retención con descuento puntual (no precio fijo bajo)
- Si se va: focus 100% en cerrar 1 nuevo en 30 días
- Documentar razón del churn → ajustar sistema

### Escenario 3: Sanción Hacienda inesperada

**Causa**: error declaración, gestoría falla, error tuyo.

**Plan**:
- Por eso reservas 35% (IVA + IRPF) — tienes para pagar
- Gestoría tiene seguro responsabilidad civil → demanda si fue su error
- Aprendes y sigues

### Escenario 4: Junior se va de repente

**Causa**: pasa.

**Plan**:
- Período sin junior: 2-4 semanas reasumes tú las tareas
- Mientras: buscar reemplazo activamente (Domestika, Workana, contactos)
- Ya tienes SOPs documentados (en `04-operacion-rrss/`) → onboarding nuevo junior en 3 días
- Costo: tu tiempo personal extra durante el bache

---

## Cifras objetivo año 1 (resumen ejecutivo)

| Métrica | Target | Observación |
|---|---|---|
| Facturación bruta año 1 | $80-120K | Realista, no agresivo |
| MRR cobrado mes 12 | $13-19K | Punto de comodidad pos-Mercedes |
| Tu sueldo neto promedio | €2.000-4.000/mes | Variable según fase |
| Colchón acumulado | $25-30K mínimo | Para irse de Mercedes |
| Clientes activos mantenimiento | 25-35 | Mix L1 + L2 |
| Casos de estudio públicos | 3-5 | Multiplicador L2 |
| Decisión fin de año | Lifestyle (A) / Full-time (B) / Build-to-sell (C) | Ver MODELO-NEGOCIO.md |

---

## Lectura recomendada (1h al mes para CEO)

- *Profit First* — Mike Michalowicz: sistema de reservas múltiples (este doc se basa en esto)
- *The Boron Letters* — Gary Halbert: marketing directo, copy
- *Built to Sell* — John Warrillow: construir para vender (si exit C)
- *Company of One* — Paul Jarvis: si exit A (lifestyle)

---

## Lo único que importa esta semana

**Cuenta operativa abierta. Cuenta IVA abierta. Gestoría contratada.**

Sin esto, lo demás es ruido.
