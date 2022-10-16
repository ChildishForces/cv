import * as React from 'react';
import ReactPDF, { G, Path, Svg } from '@react-pdf/renderer';
import { COLORS } from '@utilities/theme';

const QrCode: React.FC<ReactPDF.SVGProps> = (props) => (
  <Svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 696 696" {...props}>
    <Path
      fill={COLORS.border2}
      d="M55.613 556.133h83.42v83.42h-83.42Zm500.52-500.52h83.42v83.42h-83.42zm-500.52 0h83.42v83.42h-83.42ZM0 500.52v194.647h194.646V500.519Zm166.84 166.84H27.807V528.326H166.84ZM500.52 0v194.646h194.646V0zm166.84 166.84H528.325V27.807h139.033ZM0 0v194.646h194.646V0Zm166.84 166.84H27.807V27.807H166.84Zm500.52 500.52H696V696h-28.64Zm-27.807 0h28.64V696h-28.64Zm-27.807 0h28.64V696h-28.64Zm-27.807 0h28.641V696h-28.64Zm-27.806 0h28.64V696h-28.64Zm-27.807 0h28.64V696h-28.64Zm-27.807 0h28.641V696h-28.64Zm-111.226 0h28.64V696h-28.64Zm-27.807 0h28.641V696h-28.64Zm-27.806 0h28.64V696h-28.64Zm-83.42 0h28.64V696h-28.64Zm-27.807 0h28.64V696h-28.64Zm444.906-27.807H696v28.64h-28.64Zm-83.42 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64Zm-55.613 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-27.807 0h28.641v28.64H417.1Zm-83.42 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm417.1-27.807H696v28.64h-28.64Zm-55.614 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-194.646 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-83.42 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64Zm444.906-27.807H696v28.641h-28.64Zm-27.806 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm-27.807 0h28.641v28.641h-28.64Zm-27.806 0h28.64v28.641h-28.64Zm-55.614 0h28.641v28.641h-28.64Zm-27.806 0h28.64v28.641h-28.64Zm-55.614 0h28.641v28.641H417.1Zm-55.613 0h28.641v28.641h-28.64Zm-55.613 0h28.64v28.641h-28.64Zm-55.613 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm389.293-27.806h28.64v28.64h-28.64Zm-55.613 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-27.807 0h28.641v28.64H417.1Zm-55.613 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-55.613 0h28.64v28.64h-28.64Zm361.486-27.807h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-111.227 0h28.641v28.64h-28.64Zm-55.613 0h28.64v28.64h-28.64Zm-83.42 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64Zm444.906-27.807H696v28.641h-28.64Zm-27.806 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm-55.613 0h28.64v28.641h-28.64Zm-55.614 0h28.641v28.641h-28.64Zm-55.613 0h28.641v28.641h-28.64Zm-83.42 0h28.641v28.641h-28.64Zm222.453-27.806h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-111.227 0h28.641v28.64h-28.64Zm-27.807 0h28.641v28.64H417.1Zm-27.806 0h28.64v28.64h-28.64Zm-83.42 0h28.64v28.64h-28.64Zm-83.42 0h28.64v28.64h-28.64Zm389.293-27.807h28.64v28.641h-28.64Zm-55.613 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm-27.807 0h28.641v28.641h-28.64Zm-27.806 0h28.64v28.641h-28.64Zm-27.807 0h28.641v28.641h-28.64Zm-55.613 0h28.64v28.641h-28.64Zm-27.807 0h28.641v28.641h-28.64Zm-27.806 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm-55.613 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm-27.807 0h28.641v28.641h-28.64Zm-27.806 0h28.64v28.641h-28.64Zm-55.613 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641H83.42Zm-27.807 0h28.641v28.641h-28.64Zm-55.613 0h28.64v28.641H0ZM667.36 417.1H696v28.641h-28.64Zm-111.227 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm-27.807 0h28.641v28.641h-28.64Zm-27.806 0h28.64v28.641h-28.64Zm-55.614 0h28.641v28.641H417.1Zm-27.806 0h28.64v28.641h-28.64Zm-139.033 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm-83.42 0h28.641v28.641h-28.64Zm-83.42 0h28.641v28.641h-28.64ZM0 417.1h28.64v28.641H0Zm667.36-27.806H696v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64Zm-55.614 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64Zm-83.42 0h28.641v28.64h-28.64Zm-27.807 0h28.641v28.64H417.1Zm-27.806 0h28.64v28.64h-28.64Zm-111.227 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-166.84 0h28.64v28.64H0Zm639.553-27.807h28.64v28.641h-28.64Zm-55.614 0h28.641v28.641h-28.64Zm-55.613 0h28.64v28.641h-28.64Zm-83.42 0h28.641v28.641h-28.64Zm-111.226 0h28.64v28.641h-28.64Zm-83.42 0h28.64v28.641h-28.64Zm-55.614 0h28.641v28.641h-28.64Zm-83.42 0h28.641v28.641h-28.64Zm-55.613 0h28.641v28.641h-28.64Zm-55.613 0h28.64v28.641H0Zm667.36-27.806H696v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64Zm-55.613 0h28.64v28.64h-28.64Zm-55.614 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-27.807 0h28.641v28.64H417.1Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-111.226 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64H83.42Zm-55.613 0h28.64v28.64h-28.64ZM0 333.68h28.64v28.64H0Zm667.36-27.807H696v28.64h-28.64Zm-166.84 0h28.64v28.64h-28.64Zm-111.227 0h28.64v28.64h-28.64Zm-166.84 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-111.226 0h28.64v28.64H83.42Zm-27.807 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64H0Zm667.36-27.807H696v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm-55.614 0h28.641v28.641h-28.64Zm-27.806 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm-83.42 0h28.641v28.641h-28.64Zm-27.807 0h28.641v28.641H417.1Zm-55.613 0h28.641v28.641h-28.64Zm-27.806 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm-27.807 0h28.641v28.641h-28.64Zm-111.226 0h28.64v28.641h-28.64Zm-111.227 0h28.641v28.641h-28.64Zm-27.806 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641H0Zm639.553-27.806h28.64v28.64h-28.64Zm-111.227 0h28.64v28.64h-28.64Zm-83.42 0h28.641v28.64h-28.64Zm-139.033 0h28.64v28.64h-28.64Zm-194.646 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64H83.42Zm-27.807 0h28.641v28.64h-28.64Zm556.133-27.807h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-111.226 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-55.614 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-83.42 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64H83.42Zm-27.807 0h28.641v28.64h-28.64Zm-55.613 0h28.64v28.64H0Zm417.1-27.807h28.64v28.641H417.1Zm-166.84 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm222.453-27.806h28.641v28.64h-28.64Zm-55.613 0h28.64v28.64h-28.64Zm-55.613 0h28.64v28.64h-28.64Zm-55.614 0h28.641v28.64h-28.64Zm-55.613 0h28.64v28.64h-28.64ZM417.1 139.033h28.641v28.641H417.1Zm-55.613 0h28.641v28.641h-28.64Zm-27.806 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm-27.807 0h28.641v28.641h-28.64Zm-27.806 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm222.453-27.806h28.641v28.64h-28.64Zm-55.613 0h28.64v28.64h-28.64Zm-83.42 0h28.64v28.64h-28.64Zm-55.613 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64ZM417.1 83.42h28.641v28.64H417.1Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-83.42 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.64v28.64h-28.64Zm222.453-27.807h28.641v28.641h-28.64Zm-55.613 0h28.64v28.641h-28.64Zm-55.613 0h28.64v28.641h-28.64Zm-27.807 0h28.64v28.641h-28.64Zm-27.807 0h28.641v28.641h-28.64Zm-55.613 0h28.64v28.641h-28.64ZM417.1 27.807h28.641v28.64H417.1Zm-27.806 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64Zm-27.806 0h28.64v28.64h-28.64Zm-55.614 0h28.641v28.64h-28.64ZM444.906 0h28.641v28.64h-28.64Zm-83.42 0h28.641v28.64h-28.64Zm-55.613 0h28.64v28.64h-28.64Zm-27.807 0h28.641v28.64h-28.64ZM250.26 0h28.64v28.64h-28.64Z"
    />
  </Svg>
);

export default QrCode;
