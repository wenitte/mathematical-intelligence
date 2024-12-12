# 

Source: https://proofwiki.org/wiki/Double_Angle_Formulas/Sine/Proof_3

Theorem
$\sin 2 \theta = 2 \sin \theta \cos \theta$


Proof
  
Consider an isosceles triangle $\triangle ABC$ with base $BC$ and apex $\angle BAC = 2 \alpha$.
Construct the angle bisector to $\angle BAC$ and name it $AH$:

$\angle BAH = \angle CAH = \alpha$
From Bisector of Apex of Isosceles Triangle is Perpendicular to Base:

$AH \perp BC$
From Area of Triangle in Terms of Two Sides and Angle:














\(\ds \map \Area {\triangle BAH}\)

\(=\)







\(\ds \dfrac {BA \cdot AH \sin \alpha} 2\)




















\(\ds \map \Area {\triangle CAH}\)

\(=\)







\(\ds \dfrac {CA \cdot AH \sin \alpha} 2\)










By definition of sine:














\(\ds AH\)

\(=\)







\(\ds CA \cos \alpha\)




















\(\ds AH\)

\(=\)







\(\ds BA \cos \alpha\)










and so:














\(\ds \map \Area {\triangle BAH}\)

\(=\)







\(\ds \dfrac {BA \cdot CA \cos \alpha \sin \alpha} 2\)




















\(\ds \map \Area {\triangle CAH}\)

\(=\)







\(\ds \dfrac {CA \cdot BA \cos \alpha \sin \alpha} 2\)




















\(\ds \map \Area {\triangle ABC}\)

\(=\)







\(\ds \map \Area {\triangle BAH} + \map \Area {\triangle CAH}\)




















\(\ds \)

\(=\)







\(\ds \frac {BA \cdot CA \cos \alpha \sin \alpha} 2 + \frac {CA \cdot BA \cos \alpha \sin \alpha} 2\)




















\(\ds \)

\(=\)







\(\ds BA \cdot CA \cos \alpha \sin \alpha\)




















\(\ds \)

\(=\)







\(\ds \frac {BA \cdot CA \sin 2 \alpha} 2\)





Area of Triangle in Terms of Two Sides and Angle ($\triangle ABC$)








\(\ds \leadsto \ \ \)





\(\ds \sin 2 \alpha\)

\(=\)







\(\ds 2 \cos \alpha \sin \alpha\)





dividing both sides by $\dfrac {BA \cdot CA} 2$



$\blacksquare$





