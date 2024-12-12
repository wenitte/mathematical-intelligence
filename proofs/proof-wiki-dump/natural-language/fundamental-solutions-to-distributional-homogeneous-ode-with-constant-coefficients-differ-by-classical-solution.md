# 

Source: https://proofwiki.org/wiki/Fundamental_Solutions_to_Distributional_Homogeneous_ODE_with_Constant_Coefficients_differ_by_Classical_Solution



Theorem
Let $E_*, E, T \in \map {\DD'} \R$ be distributions.
Let $D$ be an ordinary differential operator with constant coefficients.
Let $f$ be a function differentiable by $D$.
Let $T_f \in \map {\DD'} \R$ be a distribution associated with $f$.
Let $\delta$ be the Dirac delta distribution.
Let $E_*$ be the fundamental solution to $D E_* = \delta$

Then $E$ is a fundamental solution to $DE = \delta$ if and only if $E = E_* + T_F$ where:

$DE_* = \delta$
$DF = 0$


Proof
Necessary Condition
Suppose both $E_*$ and $E$ are fundamental solutions:

$DE = \delta$
$DE_* = \delta$
Taking the difference yields:

$D \paren {E - E_*} = \mathbf 0$
where $\mathbf 0 \in \map {\DD'} \R$ is the zero distribution.
By Solution to Distributional Ordinary Differential Equation with Constant Coefficients:

$E - E_* = T_F$
where $DF = 0$.
Hence:

$E = E_* + T_F$
$\Box$


Sufficient condition
Suppose $F$ is a classical solution to $DF = 0$.
That is, suppose:

$DT_F = \mathbf 0$
Suppose $E_* \in \map {\DD'} \R$ is a fundamental solution to $DE_* = \delta$.
Let $E$ be a distribution such that $E:= E_* + T_F$.
Then:














\(\ds D E\)

\(=\)







\(\ds D E_* + D T_F\)




















\(\ds \)

\(=\)







\(\ds \delta + \mathbf 0\)




















\(\ds \)

\(=\)







\(\ds \delta\)









$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.4$: A glimpse of distribution theory. Multiplication by $C^\infty$ functions




