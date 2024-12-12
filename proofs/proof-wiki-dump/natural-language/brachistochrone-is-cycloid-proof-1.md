# 

Source: https://proofwiki.org/wiki/Brachistochrone_is_Cycloid/Proof_1



Theorem
The shape of the brachistochrone is a cycloid.


Proof

Recall from the Snell-Descartes Law:

$\dfrac {\sin \alpha_1} {v_1} = \dfrac {\sin \alpha_2} {v_2}$
Here, we invoke a generalization of the Snell-Descartes Law.
This is justified, as we are attempting to demonstrate the curve that takes the smallest time.
Thus we have $\dfrac {\sin \alpha} v = k$, where $k$ is some constant.
By the Principle of Conservation of Energy, the speed of the bead at a particular height is determined by its loss in potential energy in getting there.
Thus, at the point $\tuple {x, y}$, we have:














\(\ds \dfrac 1 2 m v^2\)

\(=\)







\(\ds m g y\)





Principle of Conservation of Energy














\(\ds v^2\)

\(=\)







\(\ds 2 g y\)





multiplying both sides by $\dfrac 2 m$




\(\text {(1)}: \quad\)









\(\ds v\)

\(=\)







\(\ds \sqrt {2 g y}\)





taking the square root of both sides



We have:














\(\ds \sin \alpha\)

\(=\)







\(\ds \cos \beta\)





from the diagram above














\(\ds \)

\(=\)







\(\ds \frac 1 {\sec \beta}\)





Definition of Real Secant Function














\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {1 + \tan^2 \beta} }\)





Difference of Squares of Secant and Tangent




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {1 + \paren {y'}^2} }\)





$y' = \tan \beta$ in the diagram above




Combining all the above equations, we get:














\(\ds \frac {\frac 1 {\sqrt {1 + \paren {y'}^2} } } {\sqrt {2 g y} }\)

\(=\)







\(\ds k\)





Putting $(1)$ and $(2)$ into the Snell-Descartes Law








\(\ds \leadsto \ \ \)





\(\ds \frac {\frac 1 {1 + \paren {y'}^2 } } {2 g y }\)

\(=\)







\(\ds k^2\)





squaring both sides








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {y \paren {1 + \paren {y'}^2} }\)

\(=\)







\(\ds 2 k^2 g\)





multiplying both sides by $2 g$








\(\ds \leadsto \ \ \)





\(\ds y \paren {1 + \paren {y'}^2}\)

\(=\)







\(\ds \frac 1 {2 k^2 g} = c\)





taking the reciprocal of both sides



where $c$ is another (more convenient) constant.
This is the differential equation which defines the brachistochrone.
Now we solve it:














\(\ds y \paren {1 + \paren {y'}^2}\)

\(=\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds 1 + \paren {y'}^2\)

\(=\)







\(\ds \dfrac c y\)





dividing both sides by $y$








\(\ds \leadsto \ \ \)





\(\ds \paren {y'}^2\)

\(=\)







\(\ds \dfrac c y - 1\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \sqrt {\frac {c - y} y}\)





taking the square root of both sides








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d y}\)

\(=\)







\(\ds \sqrt {\frac y {c - y} }\)





taking the reciprocal of both sides








\(\ds \leadsto \ \ \)





\(\ds \rd x\)

\(=\)







\(\ds \sqrt {\frac y {c - y} } \rd y\)










Now we introduce a change of variable:
Let $\sqrt {\dfrac y {c - y} } = \tan \phi$
Thus:




\(\text {(4)}: \quad\)









\(\ds \sqrt {\frac y {c - y} }\)

\(=\)







\(\ds \tan \phi\)














\(\ds \leadsto \ \ \)





\(\ds \frac y {c - y}\)

\(=\)







\(\ds \tan^2 \phi\)





squaring both sides








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \paren {c - y} \tan^2 \phi\)





multiplying both sides by $\paren {c - y}$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds c \tan^2 \phi - y \tan^2 \phi\)














\(\ds \leadsto \ \ \)





\(\ds y \paren {1 + \tan^2 \phi}\)

\(=\)







\(\ds c \tan^2 \phi\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac {c \tan^2 \phi} {\paren {1 + \tan^2 \phi} }\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac {c \tan^2 \phi} {\sec^2 \phi }\)





Difference of Squares of Secant and Tangent




\(\text {(5)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds c \sin^2 \phi\)





Definition of Real Secant Function




\(\text {(6)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d \phi}\)

\(=\)







\(\ds 2 c \sin \phi \cos \phi\)





Derivative of Sine Function, Derivative of Square Function




Also:














\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \sqrt {\frac {c - y} y}\)





from $(3)$ above








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x}\)

\(=\)







\(\ds \frac 1 {\tan \phi}\)





from $(3)$ and $(4)$ above








\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d \phi}\)

\(=\)







\(\ds \frac {\d y} {\d x} \frac {\d x} {\d \phi}\)





Derivative of Composite Function














\(\ds \)

\(=\)







\(\ds 2 c \sin \phi \cos \phi\)





from $(6)$ above








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d \phi}\)

\(=\)







\(\ds \dfrac {\paren {\frac {\d y} {\d \phi} } } {\paren {\frac {\d y} {\d x} } }\)





rearranging Derivative of Composite Function














\(\ds \)

\(=\)







\(\ds \dfrac {2 c \sin \phi \cos \phi} {\dfrac 1 {\tan \phi} }\)




















\(\ds \)

\(=\)







\(\ds 2 c \sin^2 \phi\)





Definition of Real Tangent Function














\(\ds \)

\(=\)







\(\ds c \paren {1 - \cos 2 \phi}\)





Double Angle Formula for Cosine: Corollary $5$




Thus:














\(\ds \frac {\d x} {\d \phi}\)

\(=\)







\(\ds c \paren {1 - \cos 2 \phi}\)














\(\ds \leadsto \ \ \)





\(\ds \int \rd x\)

\(=\)







\(\ds \int c \paren {1 - \cos 2 \phi} \rd \phi\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \frac c 2 \paren {2 \phi - \sin 2 \phi} + c_1\)





Primitive of $\cos a x$ and Primitive of Constant



As the curve goes through the origin, we have $x = y = 0$ when $\phi = 0$ and so $c_1 = 0$.

Now we can look again at our expression for $y$:














\(\ds y\)

\(=\)







\(\ds c \sin^2 \phi\)





from $(5)$ above














\(\ds \)

\(=\)







\(\ds \frac c 2 \paren {1 - \cos 2 \phi}\)





Double Angle Formula for Cosine: Corollary $5$




To simplify the constants, we can substitute $a = c / 2$ and $\theta = 2 \phi$, and thus we get:














\(\ds x\)

\(=\)







\(\ds a \paren {\theta - \sin \theta}\)




















\(\ds y\)

\(=\)







\(\ds a \paren {1 - \cos \theta}\)









which are the parametric equations of the cycloid.
$\blacksquare$


Historical Note
The Brachistochrone Problem was raised by Johann Bernoulli to the readers of Acta Eruditorum in June $1696$.
Isaac Newton interpreted the problem as a direct challenge to his abilities, and (despite being out of practice) solved the problem in the evening before going to bed.
He published it anonymously, but Bernoulli could tell whose solution it was, and commented:

I recognise the lion by his print.
Bernoulli published the solution in the Acta Eruditorum in May $1697$, along with solutions by Jacob Bernoulli and Gottfried Wilhelm von Leibniz.

With justice we admire Huygens because he first discovered that a heavy particle slides down to the bottom of a cycloid in the same time, no matter where it starts. But you will be petrified with astonishment when I say that this very same cycloid, the tautochrone of Huygens, is also the brachistochrone we are seeking.
-- Johann Bernoulli


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 6$: The Brachistochrone. Fermat and the Bernoullis
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.21$: The Cycloid
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.22$: Bernoulli's Solution of the Brachistochrone Problem




