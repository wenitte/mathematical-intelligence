# 

Source: https://proofwiki.org/wiki/Complex_Addition/Examples/Travel_2

Example of Complex Addition
An airplane travels:

$150$ kilometres southeast
then:

$100$ kilometres due west
then:

$225$ kilometres $30 \degrees$ north of east
then:

$323$ kilometres northeast.

Assuming the curvature of Earth to be negligible at this scale, at the end of this travel, the plane is $490$ kilometres in a direction $28.7 \degrees$ north of east from its starting point.


Proof 1
Let the route of the traveller be embedded in the complex plane.




Let $P$ be the final location of the traveller.

The given directions can be translated into absolute arguments thus:

Southeast is $45 \degrees$ south of east, and therefore an argument of $315 \degrees$
Due west is an argument of $180 \degrees$
$30 \degrees$ north of east is an argument of $30 \degrees$
Northeast is $45 \degrees$ north of east, and therefore an argument of $45 \degrees$.

Thus the problem reduces to finding the sum:














\(\ds P\)

\(=\)







\(\ds 150 \cis 315 \degrees + 100 \cis 180 \degrees + 225 \cis 30 \degrees + 323 \cis 45 \degrees\)




















\(\ds \)

\(=\)







\(\ds \paren {150 \cos 315 \degrees + 100 \cos 180 \degrees + 225 \cos 30 \degrees + 323 \cos 45 \degrees} + i \paren {150 \sin 315 \degrees + 100 \sin 180 \degrees + 225 \sin 30 \degrees + 323 \sin 45 \degrees}\)




















\(\ds \)

\(=\)







\(\ds \paren {150 \frac {\sqrt 2} 2 + 100 \paren {-1} + 225 \paren {\dfrac {\sqrt 3} 2} + 323 \paren {\dfrac {\sqrt 2} 2} } + i \paren {150 \sin 315 \degrees + 100 \sin 180 \degrees + 225 \sin 30 \degrees + 323 \sin 45 \degrees}\)





Cosine of $315 \degrees$, Cosine of $30 \degrees$, Cosine of $45 \degrees$














\(\ds \)

\(=\)







\(\ds \paren {150 \frac {\sqrt 2} 2 + 100 \paren {-1} + 225 \paren {\dfrac {\sqrt 3} 2} + 323 \paren {\dfrac {\sqrt 2} 2} } + i \paren {150 \frac {-\sqrt 2} 2 + 100 \paren {0} + 225 \paren {\dfrac 1 2} + 323 \paren {\dfrac {\sqrt 2} 2} }\)





Sine of $315 \degrees$, Sine of $30 \degrees$, Sine of $45 \degrees$














\(\ds \)

\(=\)







\(\ds \paren {106.07 - 100 + 194.86 + 228.40} + i \paren {-106.07 + 0 + 112.50 + 228.40}\)





after algebra and calculation














\(\ds \)

\(=\)







\(\ds 429.33 + i 234.83\)





after calculation



Then:














\(\ds R \cis \theta\)

\(=\)







\(\ds 429.33 + i 234.83\)














\(\ds \leadsto \ \ \)





\(\ds R\)

\(=\)







\(\ds \sqrt {429.33^2 + 234.83^2}\)




















\(\ds \)

\(\approx\)







\(\ds 489.35\)














\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \tan^{-1} \dfrac {234.83} {429.33}\)




















\(\ds \)

\(\approx\)







\(\ds \map {\cos^{-1} } {0 \cdotp 547}\)




















\(\ds \)

\(\approx\)







\(\ds 28.7 \degrees\)









$\blacksquare$


Proof 2
By plotting the points in a graphics package, or on paper with a ruler and protractor:




$\blacksquare$





