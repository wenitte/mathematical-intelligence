# 

Source: https://proofwiki.org/wiki/Limit_of_Sine_of_X_over_X_at_Zero/Geometric_Proof

Theorem
$\ds \lim_{x \mathop \to 0} \frac {\sin x} x = 1$


Geometric Proof
Let $\theta$ be an angle in the unit circle, measured in radians.
Define the following points:















\(\ds O\)

\(=\)







\(\ds \tuple {0, 0}\)




















\(\ds A\)

\(=\)







\(\ds \tuple {1, 0}\)




















\(\ds B\)

\(=\)







\(\ds \tuple {\cos \theta, \sin \theta}\)




















\(\ds C\)

\(=\)







\(\ds \tuple {1, \tan \theta}\)









and consider all $\theta$ in the open interval $\openint 0 {\dfrac \pi 2}$.


From Area of Triangle in Terms of Side and Altitude, we have that $\triangle OAB$ has an area of $\dfrac 1 2 b h$ where:

$b = 1$
$h = \sin \theta$
and so:

$\Area \triangle OAB = \dfrac 1 2 \sin \theta$
From Area of Sector, the sector formed by arc $AB$ subtending $O$ is $\dfrac \theta 2$.
Clearly this sector cannot be smaller in area than $\triangle OAB$, and so we have the inequality:

$\dfrac {\sin \theta} 2 \le \dfrac \theta 2$
for all $\theta \in \openint 0 {\dfrac \pi 2}$.

Next, from Area of Triangle in Terms of Side and Altitude, we have that $\triangle OAC$ has an area of $\dfrac 1 2 b h$ where:

$b = 1$
$h = \tan \theta$
and so:

$\Area \triangle OAC = \dfrac 1 2 \tan \theta$
$\triangle OAC$ is clearly not smaller than the sector.
We now have the following compound inequality:

$(\text A) \quad \dfrac 1 2 \sin \theta \le \dfrac 1 2 \theta \le \dfrac 1 2 \tan \theta$
for all $\theta \in \openint 0 {\dfrac \pi 2}$.
Clearly, if any of the plane regions were to be reflected about the $x$-axis, the magnitudes of the signed areas would be the same.


This article contains statements that are justified by handwavery.In particular: There is a result in geometry that as a reflection is an isometry, areas are unaffected, so the "clearly" needs to be replaced with a link to that result (which may or may not exist already on this site).You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
The inequality $(\text A)$, then, will hold in quadrant $\text{IV}$ if the absolute value of all terms is taken, and so:















\(\ds \size {\frac 1 2 \sin \theta}\)

\(\le\)







\(\ds \size {\frac 1 2 \theta} \le \size {\frac 1 2 \tan \theta}\)





for all $\theta \in \openint {-\dfrac \pi 2} 0 \cup \openint 0 {\dfrac \pi 2}$








\(\ds \leadsto \ \ \)





\(\ds \frac 1 2 \size {\sin \theta}\)

\(\le\)







\(\ds \frac 1 2 \size \theta \le \frac 1 2 \size {\tan \theta}\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\le\)







\(\ds \frac {\size \theta} {\size {\sin \theta} } \le \frac 1 {\size {\cos \theta} }\)





multiplying all terms by $\dfrac 2 {\size {\sin \theta} }$








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\le\)







\(\ds \size {\frac \theta {\sin \theta} } \le \size {\frac 1 {\cos \theta} }\)










Now, we have that $\dfrac \theta {\sin\theta} \ge 0$ on $\openint {-\dfrac \pi 2} 0 \cup \openint 0 {\dfrac \pi 2}$.
Also, we have that $\dfrac 1 {\cos \theta} \ge 0$ on $\openint {-\dfrac \pi 2} 0 \cup \openint 0 {\dfrac \pi 2}$.
So our absolute value signs are not needed.
Hence we arrive at:

$1 \le \dfrac \theta {\sin \theta} \le \dfrac 1 {\cos \theta}$
for all $\theta \in \openint {-\dfrac \pi 2} 0 \cup \openint 0 {\dfrac \pi 2}$.

Inverting all terms and reversing the inequalities:

$1 \ge \dfrac {\sin\theta} \theta \ge \cos \theta$
for all $\theta \in \openint {-\dfrac \pi 2} 0 \cup \openint 0 {\dfrac \pi 2}$.
Taking to the limit:

$\ds \lim_{\theta \mathop \to 0} 1 = 1$
$\ds \lim_{\theta \mathop \to 0} \cos \theta = 1$
So by the Squeeze Theorem:

$\ds \lim_{\theta \mathop \to 0} \frac {\sin \theta} \theta = 1$
$\blacksquare$


Sources
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 1.3$
For a video presentation of the contents of this page, visit the Khan Academy.




