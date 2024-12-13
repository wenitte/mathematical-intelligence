# 

Source: https://proofwiki.org/wiki/Rational_Numbers_are_Totally_Disconnected



Theorem
Let $\struct {\Q, \tau_d}$ be the rational number space under the Euclidean topology $\tau_d$.

Then $\struct {\Q, \tau_d}$ is a totally disconnected space.


Proof 1
Let $x, y \in \Q$ such that $x \ne y$.
From Between two Rational Numbers exists Irrational Number, there exists $\alpha \in \R \setminus \Q$ such that $x < \alpha < y$.
From Rational Numbers are not Connected, it follows that $x$ and $y$ belong to different components of $\Q$.
As $x$ and $y$ are arbitrary, it follows that no rational number is in the same component as any other rational number.
That is, the components of $\Q$ are singetons.
Hence the result, by definition of a totally disconnected space.
$\blacksquare$


Proof 2
Follows from:

Rational Number Space is Totally Separated
Totally Separated Space is Totally Disconnected
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.5$: Components: Examples $6.5.1$



