# 

Source: https://proofwiki.org/wiki/Direction_Angle_of_2D_Vector_in_Terms_of_Arctangent



Theorem
Let $\mathbf a$ be a vector quantity embedded in a Cartesian plane $P$ expressed in component form as:

$\mathbf a = x \mathbf i + y \mathbf j$

Let $\theta$ denote the direction of $\mathbf a$.
Then:

$\theta = \begin{cases}
\map \arctan {\dfrac y x} & : x > 0 \\
\map \arctan {\dfrac y x} + \pi & : x < 0 \text{ and } y \ge 0 \\
\map \arctan {\dfrac y x} - \pi & : x < 0 \text{ and } y < 0 \\
\dfrac \pi 2 & : x = 0 \text{ and } y > 0 \\
-\dfrac \pi 2 & : x = 0 \text{ and } y < 0 \\
\text{undefined} & : x = 0 \text { and } y = 0
\end{cases}$
where:

$\arctan$ denotes the real arctangent function, defined on the real interval $\openint {-\dfrac \pi 2} {\dfrac \pi 2}$
$\theta$ is conventionally measured from the positive direction of the $x$-axis in the interval $\hointl {-\pi} \pi$.


Proof
Let $\mathbf a$ be such that one of the following holds:

$\mathbf a$ is in Quadrant $\text{I}$ or Quadrant $\text{IV}$
$\mathbf a$ is on the positive direction of the $x$-axis.
Then:

$x > 0$
and:

$-\dfrac \pi 2 < \theta < \dfrac \pi 2$
The components of $\mathbf a$ form the legs of a right triangle where:














\(\ds \tan \theta\)

\(=\)







\(\ds \frac y x\)





Definition of Tangent Function








\(\ds \leadsto \ \ \)





\(\ds \map \arctan {\tan \theta}\)

\(=\)







\(\ds \map \arctan {\frac y x}\)





can take arctangent of both sides as $-\dfrac \pi 2 < \theta < \dfrac \pi 2$




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \map \arctan {\frac y x}\)





Composite of Bijection with Inverse is Identity Mapping



$\Box$

Let $\mathbf a$ be such that one of the following holds:

$\mathbf a$ is in Quadrant $\text{II}$
$\mathbf a$ is on the negative direction of the $x$-axis.
Then:

$x < 0$
$y \ge 0$
and:

$\dfrac \pi 2 < \theta \le \pi$













\(\ds \tan \theta\)

\(=\)







\(\ds \frac y x\)





Definition of Tangent Function








\(\ds \leadsto \ \ \)





\(\ds \tan \paren {\theta - \pi}\)

\(=\)







\(\ds \frac y x\)





Tangent Function is Periodic on Reals








\(\ds \leadsto \ \ \)





\(\ds \map \arctan {\tan \paren {\theta - \pi} }\)

\(=\)







\(\ds \map \arctan {\frac y x}\)





$\dfrac \pi 2 < \theta \le \pi \implies -\dfrac \pi 2 < \theta - \pi \le 0$, can take arctangent of both sides as $-\dfrac \pi 2 < \theta - \pi < \dfrac \pi 2$








\(\ds \leadsto \ \ \)





\(\ds \theta - \pi\)

\(=\)







\(\ds \map \arctan {\frac y x}\)





Composite of Bijection with Inverse is Identity Mapping




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \map \arctan {\frac y x} + \pi\)





Add $\pi$ on both sides



$\Box$


This article needs proofreading.In particular: I believe this is the better explanationIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Let $\mathbf a$ be in Quadrant $\text{III}$.
Then:

$x < 0$
$y < 0$
and:

$-\pi < \theta < \dfrac {-\pi} 2$













\(\ds \tan \theta\)

\(=\)







\(\ds \frac y x\)





Definition of Tangent Function








\(\ds \leadsto \ \ \)





\(\ds \tan \paren {\theta + \pi}\)

\(=\)







\(\ds \frac y x\)





Tangent Function is Periodic on Reals








\(\ds \leadsto \ \ \)





\(\ds \map \arctan {\tan \paren {\theta + \pi} }\)

\(=\)







\(\ds \map \arctan {\frac y x}\)





$-\pi < \theta < \dfrac {-\pi} 2 \implies 0 < \theta + \pi < \dfrac \pi 2$, can take arctangent of both sides as $-\dfrac \pi 2 < \theta + \pi < \dfrac \pi 2$








\(\ds \leadsto \ \ \)





\(\ds \theta + \pi\)

\(=\)







\(\ds \map \arctan {\frac y x}\)





Composite of Bijection with Inverse is Identity Mapping




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \map \arctan {\frac y x} - \pi\)





Substract $\pi$ on both sides



$\Box$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Let $\mathbf a$ be on the positive direction of the $y$-axis.
Then:

$x = 0$
$y > 0$
Then the arctangent of $\theta$ is undefined.
We have:




\(\text {(4)}: \quad\)









\(\ds \theta\)

\(=\)







\(\ds \frac \pi 2\)









$\Box$

Let $\mathbf a$ be on the negative direction of the $y$-axis.
Then:

$x = 0$
$y < 0$
Then the arctangent of $\theta$ is undefined.
We have:




\(\text {(5)}: \quad\)









\(\ds \theta\)

\(=\)







\(\ds -\frac \pi 2\)









$\Box$

Finally, let $\mathbf a$ be the zero vector.
We have:

$x = 0$
$y = 0$
and hence:




\(\text {(6)}: \quad\)









\(\ds \theta\)

\(=\)







\(\ds \text {undefined}\)





Zero Vector has no Direction




Hence, $\theta$ can be described using the following piecewise function:














\(\ds \theta\)

\(=\)







\(\ds \begin{cases}
\map \arctan {\dfrac y x} & : x > 0 \\
\map \arctan {\dfrac y x} + \pi & : x < 0 \text{ and } y \ge 0 \\
\map \arctan {\dfrac y x} - \pi & : x < 0 \text{ and } y < 0 \\
\dfrac \pi 2 & : x = 0 \text{ and } y > 0 \\
-\dfrac \pi 2 & : x = 0 \text{ and } y < 0 \\
\text{undefined} & : x = 0 \text { and } y = 0
\end{cases}\)






from $(1)$, $(2)$, $(3)$, $(4)$, $(5)$, and $(6)$ and the cases in which they apply



Hence the result.
$\blacksquare$


Also defined as
Some sources define the codomain as the interval $\hointr 0 {2 \pi}$.


Also known as
This piecewise function is often presented in computer languages as $\map {\text {atan2} } {y, x}$.





