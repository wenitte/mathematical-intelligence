# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Distributional_Primitive



Theorem
Let $T \in \map {\DD'} \R$ be a distribution.

Then there exists a distribution $S \in \map {\DD'} \R$ such that in the distributional sense:

$S' = T$
Furthermore, $S$ is unique up to an arbitrary constant.


Proof
Let $\mathbf 0 : \R \to 0$ be the zero mapping.
Let $\phi_0 \in \map \DD \R \setminus \set {\mathbf 0}$ be a test function.
Let $\psi \in \map \DD \R$ be a test function.
Let $\phi : \R \to \R$ be a real function such that:

$\ds \phi := \psi - \frac {\int_{-\infty}^\infty \map \psi x \rd x} {\int_{-\infty}^\infty \map {\phi_0} x \rd x} \phi_0$


Existence of Unique Primitive of $\phi$
Since $\phi_0, \psi \in \map \DD \R$, by the closure of the test function vector space $\phi \in \map \DD \R$ too.
Moreover:














\(\ds \int_{-\infty}^\infty \map \phi x \rd x\)

\(=\)







\(\ds \int_{-\infty}^\infty \map \psi x \rd x - \frac {\int_{-\infty}^\infty \map \psi x \rd x} {\int_{-\infty}^\infty \map {\phi_0} x \rd x} \int_{-\infty}^\infty \map {\phi_0} x \rd x\)




















\(\ds \)

\(=\)







\(\ds 0\)









Thus:

$\ds \phi \in Y := \set {\phi \in \map \DD \R : \int_{-\infty}^\infty \map \phi x \rd x = 0}$
By Characterization of Derivative of Test Function, there exists a unique $\Phi \in \map \DD \R$ such that $\Phi' = \phi$.
$\Box$

Let $T \in \map {\DD'} \R$ be a distribution.
Let $S: \map \DD \R \to \C$ be a mapping such that $\map S \psi = - \map T \Phi$.


Linearity of $S$
Let $\psi_1, \psi_2 \in \map \DD \R$.
Let $\Phi_1, \Phi_2 \in \map \DD \R$ be such that:

$\ds \Phi_1' = \phi_1 := \psi_1 - \frac {\int_{-\infty}^\infty \map {\psi_1} x \rd x} {\int_{-\infty}^\infty \map {\phi_0} x \rd x} \phi_0$
$\ds \Phi_2' = \phi_2 := \psi_2 - \frac {\int_{-\infty}^\infty \map {\psi_2} x \rd x} {\int_{-\infty}^\infty \map {\phi_0} x \rd x} \phi_0$
Then:

$\ds \paren {\Phi_1 + \Phi_2}' = \psi_1 + \psi_2 - \frac {\int_{-\infty}^\infty \paren {\map {\psi_1} x + \map {\psi_2} x} \rd x} {\int_{-\infty}^\infty \map {\phi_0} x \rd x} \phi_0$
Thus:














\(\ds \map S {\psi_1 + \psi_2}\)

\(=\)







\(\ds - \map T {\Phi_1 + \Phi_2}\)




















\(\ds \)

\(=\)







\(\ds - \map T {\Phi_1} - \map T {\Phi_2}\)





Definition of Distribution














\(\ds \)

\(=\)







\(\ds \map S {\psi_1} + \map S {\psi_2}\)









Similarly:










\(\ds \forall \alpha \in \C : \forall \psi \in \map \DD \R: \, \)



\(\ds \map S {\alpha \psi}\)

\(=\)







\(\ds - \map T {\alpha \Phi}\)




















\(\ds \)

\(=\)







\(\ds - \alpha \map T \Phi\)





Definition of Distribution














\(\ds \)

\(=\)







\(\ds \alpha \map S \psi\)









$\Box$


Continuity of $S$
Let $\sequence {\psi_n}_{n \mathop \in \N}$ be a sequence in $\map \DD \R$ such that $\psi_n \stackrel {\DD} {\longrightarrow} \mathbf 0$.
By definition of a convergent sequence in the test function space, there exists $a \in \R_{> 0}$ such that:

$\forall n \in \N : \forall x \notin \closedint {-a} a : \map {\psi_n} x = 0$
and $\sequence {\psi_n}_{n \mathop \in \N}$ converges uniformly to $\mathbf 0$.
Hence:














\(\ds \size {\int_{-\infty}^\infty \map {\psi_n} x \rd x}\)

\(\le\)







\(\ds \size {\int_{-a}^a \map {\psi_n} x \rd x}\)




















\(\ds \)

\(\le\)







\(\ds 2 a \norm {\psi_n}_\infty\)





Definition of Supremum Norm on Space of Continuous on Closed Interval Real-Valued Functions














\(\ds \)

\(\stackrel {n \mathop \to \infty} {\longrightarrow}\)







\(\ds 0\)





Definition of Uniformly Convergent Real Sequence



Let:

$\ds \phi_n := \psi_n - \frac {\int_{-\infty}^\infty \map {\psi_n} x \rd x} {\int_{-\infty}^\infty \map {\phi_0} x \rd x} \phi_0$
$\phi_n$ is composed of $\psi_n$ and $\phi_0$, which have compact supports.
Then $\phi_n$ also has a compact support.
Thus:

$\forall n \in \N : \exists b \in \R_{> 0} : \forall x \notin \closedint {-b} b : \map {\phi_n} x = 0$
For $k \in \N_{> 0}$ we have that:

$\ds \phi_n^{\paren k} = \psi_n^{\paren k} - \frac {\int_{-\infty}^\infty \map {\psi_n} x \rd x} {\int_{-\infty}^\infty \map {\phi_0} x \rd x} \phi_0^{\paren k}$
Since $\sequence {\psi_n}_{n \mathop \in \N}$ converges in the test function space, it holds that, for all $k \in \N_{>0}$:

$\sequence {\psi_n^{\paren k}}_{n \mathop \in \N}$ converges uniformly to $\mathbf 0$.
Also, for all $k \in \N_{> 0}$:

$\phi_0^{\paren k}$ is fixed.
Then:














\(\ds \size {\phi_n^{\paren k} - \psi_n^{\paren k} }\)

\(=\)







\(\ds \size {\frac {\int_{-\infty}^\infty \map {\psi_n} x \rd x} {\int_{-\infty}^\infty \map {\phi_0} x \rd x} \phi_0^{\paren k} }\)




















\(\ds \)

\(\le\)







\(\ds 2 a \norm {\psi_n}_\infty \size {\frac {\phi_0^{\paren k} } {\int_{-\infty}^\infty \map {\phi_0} x \rd x} }\)




















\(\ds \)

\(\stackrel {n \mathop \to \infty} {\longrightarrow}\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \norm {\phi_n^{\paren k} - \psi_n^{\paren k} }_\infty\)

\(\stackrel {n \mathop \to \infty} {\longrightarrow}\)







\(\ds 0\)









Thus, for all $k \in \N_{> 0}$ the sequence $\sequence {\phi_n^{\paren k}}_{n \mathop \in \N}$ converges uniformly to the same mapping as $\sequence {\psi_n^{\paren k}}_{n \mathop \in \N}$, that is, $\mathbf 0$.
Hence, $\phi_n$ converges in the test function space to $\mathbf 0$:

$\phi_n \stackrel {\DD} {\longrightarrow} \mathbf 0$
For every $n \in \N$ let $\Phi_n$ be the unique element in $\map \DD \R$ such that $\Phi'_n = \phi_n$.
From Conditions for Preservation of Covergence in Test Function Space under Differentiation we conclude that:

$\Phi_n \stackrel {\DD} {\longrightarrow} \mathbf 0$
Consequently:














\(\ds \map S {\psi_n}\)

\(=\)







\(\ds - \map T {\Phi_n}\)




















\(\ds \)

\(\stackrel {n \mathop \to \infty} {\longrightarrow}\)







\(\ds 0\)





Definition of Distribution



Thus, $S \in \map {\DD'} \R$.
$\Box$


$S' = T$
Let $\Phi \in \map \DD \R$.
Then:














\(\ds \phi\)

\(:=\)







\(\ds \Phi' - \frac {\int_{-\infty}^\infty \map {\Phi'} x \rd x} {\int_{-\infty}^\infty \map {\phi_0} x \rd x} \phi_0\)




















\(\ds \)

\(=\)







\(\ds \Phi' - 0\)





Test function vanishes outside its support














\(\ds \)

\(=\)







\(\ds \Phi'\)









Thus:














\(\ds \map {S'} \Phi\)

\(=\)







\(\ds - \map S {\Phi'}\)





Definition of Distributional Derivative














\(\ds \)

\(=\)







\(\ds - \paren {- \map T \Phi}\)





$\map S \psi = - \map T \Psi$ with $\psi = \Phi'$, where $\Psi$ is the unique primitive of $\phi = \Phi'$, which indeed is $\Phi$














\(\ds \)

\(=\)







\(\ds \map T \Phi\)









Hence, $S' = T$.
$\Box$


$S$ is unique up to a constant
Suppose $S, R \in \map {\DD'} \R$ are distributions such that for some test function $\rho \in \map \DD \R$ we have:

$\map {S'} \rho = \map T \rho$
$\map {R'} \rho = \map T \rho$
Then:














\(\ds \map {S'} \rho - \map {R'} \rho\)

\(=\)







\(\ds 0\)









We have that:

Distributional Derivative on Distributions is Linear Operator
Distribution Space with Pointwise Addition and Pointwise Scalar Multiplication forms Vector Space
By Vanishing Distributional Derivative of Distribution implies Distribution is Constant, $S - R$ must be a constant distribution $F_c$ with $c \in \R$.
$\Box$

$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.2$: Derivatives in the distributional sense




