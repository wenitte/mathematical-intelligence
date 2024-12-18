# 

Source: https://proofwiki.org/wiki/Length_of_Arc_of_Cycloid/Proof_3

Theorem
Let $C$ be a cycloid generated by the equations:

$x = a \paren {\theta - \sin \theta}$
$y = a \paren {1 - \cos \theta}$
Then the length of one arc of the cycloid is $8 a$.


Proof

This article needs to be tidied.In particular: consistency with house style, which including both content and code style.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

Descartes approximated the Cycloid by subtituting a polygon for the generating circle.  For example, a hexagon ($n=6$) produces 5 arches or lobes ($n-1$).  
Each arch is generated by turning through the external angle of the polygon.  For the hexagon, this is $\dfrac {2 \pi} 6$.
The arches have arms of different lengths.  The first is simply the side of the hexagon.  The arm of the second arch is the chord which forms a triangle with two adjacent sides of the polygon, etc.  
We can obtain the lengths of those sides by considering the angles that subtend them.  The central angle subtending a single side of the hexagon is 














\(\ds \theta\)

\(=\)







\(\ds \frac {2 \pi} 6\)





central angle for hexagon
















\(\ds \theta\)

\(=\)







\(\ds k \frac {2 \pi} 6\)





angle subtending k sides
















\(\ds c\)

\(=\)







\(\ds 2a \sin k \frac {2 \pi} 6\)





chord for hexagon inscribed in circle of radius a, subtending k sides
















\(\ds l\)

\(=\)







\(\ds \frac {2 \pi} 6 \cdot 2a \sin k \frac {2 \pi} 6\)





length of arch is angle times arm
















\(\ds L\)

\(=\)







\(\ds \sum \frac {2 \pi} 6 \cdot 2a \sin k \frac {2 \pi} 6\)





total arc, summed over k = n-1 arches



It is convenient to let the sum range from 0 to 6 (the two extra terms don't contribute anything).
In addition, everywhere $6$ appears we can substitute $n$ for the polygon of $n$ sides.














\(\ds L\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \ \ \dfrac {2 \pi} n \cdot 2a \cdot \sin k \dfrac \pi n = 4a \dfrac \pi n \sum_0^n \sin k \theta\)









where $\theta = \dfrac \pi n$.  We use one of Lagrange's trigonometric identities.  This can be derived from the Werner Formula for Sine by Sine














\(\ds 2 \sin A \sin B\)

\(=\)







\(\ds \cos {A - B} - \cos {A + B}\)









by substituting $A = \sin k \theta$ and $B = \frac 1 2$, and taking the sum of both sides, noting that the infinite sum on the right-hand side is a telescoping series.  The identity we need is














\(\ds \sum_{k \mathop = 0}^n \ \ \sin k \theta\)

\(=\)







\(\ds \frac {\cos \dfrac 1 2 \theta - \cos (n + \dfrac 1 2) \theta} {2 \sin \dfrac 1 2 \theta}\)









Now let $n \rightarrow \infty$.  Since $\theta = \dfrac \pi n$, the angle for the first term in the numerator becomes
$\dfrac 1 2 \dfrac \pi n = 0$
so we have for the first term $\cos 0 = 1$.
The second term becomes $\cos 0 + \pi = -1$ so the numerator is just $2$, which cancels the $2$ in the denominator.  
Use the Power Series Expansion for Sine Function (since $\pi/n \rightarrow 0$).  The denominator is
$\sin \dfrac 1 2 \theta \approx \dfrac 1 2 \dfrac \pi n$
The expression for the total arc length $L$ becomes














\(\ds L\)

\(=\)







\(\ds 4a \cdot \dfrac \pi n \dfrac {2n} \pi = 8a\)









$\blacksquare$





