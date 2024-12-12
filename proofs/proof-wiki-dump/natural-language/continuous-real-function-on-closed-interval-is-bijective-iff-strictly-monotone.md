# 

Source: https://proofwiki.org/wiki/Continuous_Real_Function_on_Closed_Interval_is_Bijective_iff_Strictly_Monotone



Theorem
Let $\closedint a b$ and $\closedint c d$ be closed real intervals.
Let $f: \closedint c d \to \closedint a b$ be a continuous real function.
Let $\map f c, \map f d \in \set {a, b}$.

Then $f$ is bijective if and only if $f$ is strictly monotone.


Proof
Necessary condition
Let $f$ be a bijection.
From Continuous Injection of Interval is Strictly Monotone, it follows that $f$ is strictly monotone.
$\Box$


Sufficient condition
Let $f$ be strictly monotone.
From Strictly Monotone Real Function is Bijective, it follows that $f$ is a bijection on its image.
From Image of Interval by Continuous Function is Interval, it follows that the image of $f$ is a real interval.

Suppose that $f$ is strictly increasing.
Then by definition $\map f c < \map f d$.
It follows that:














\(\ds \map f c\)

\(=\)







\(\ds a\)




















\(\ds \map f d\)

\(=\)







\(\ds b\)










It follows that for all $x \in \closedint c d$:














\(\ds \map f x\)

\(\ge\)







\(\ds \map f c\)




















\(\ds \)

\(=\)







\(\ds a\)




















\(\ds \map f x\)

\(\le\)







\(\ds \map f d\)




















\(\ds \)

\(=\)







\(\ds b\)










Thus, the image of $f$ is $\closedint a b$.
$\Box$

Suppose instead that $f$ is strictly decreasing.
Then by definition $\map f c > \map f d$.

It follows that:














\(\ds \map f c\)

\(=\)







\(\ds b\)




















\(\ds \map f d\)

\(=\)







\(\ds a\)










It follows that for all $x \in \closedint c d$:














\(\ds \map f x\)

\(\le\)







\(\ds \map f c\)




















\(\ds \)

\(=\)







\(\ds b\)




















\(\ds \map f x\)

\(\ge\)







\(\ds \map f d\)




















\(\ds \)

\(=\)







\(\ds a\)










Thus the image of $f$ is again $\closedint a b$.
$\blacksquare$





