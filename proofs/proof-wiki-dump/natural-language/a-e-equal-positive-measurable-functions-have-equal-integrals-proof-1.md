# 

Source: https://proofwiki.org/wiki/A.E._Equal_Positive_Measurable_Functions_have_Equal_Integrals/Proof_1

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g: X \to \overline \R_{\ge 0}$ be positive $\Sigma$-measurable functions.
Suppose that $f = g$ almost everywhere.

Then:

$\ds \int f \rd \mu = \int g \rd \mu$


Proof
Let $N$ be the set defined by:

$N = \set {x \in X: \map f x \ne \map g x}$
By hypothesis, $N$ is a $\mu$-null set.
If $N = \O$, then $f = g$, trivially implying the result.

If $N \ne \O$, then by Set with Relative Complement forms Partition:

$X = N \cup \paren {X \setminus N}$
Now:














\(\ds \int f \rd \mu\)

\(=\)







\(\ds \int f \chi_X \rd \mu\)





Characteristic Function of Universe














\(\ds \)

\(=\)







\(\ds \int f \chi_{N \cup \paren {X \setminus N} } \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int \map f {\chi_N + \chi_{X \setminus N} } \rd \mu\)





Characteristic Function of Union














\(\ds \)

\(=\)







\(\ds \int f \chi_N \rd \mu + \int f \chi_{X \setminus N} \rd \mu\)





Integral of Integrable Function is Additive














\(\ds \)

\(=\)







\(\ds 0 + \int f \chi_{X \setminus N} \rd \mu\)





Integral of Integrable Function over Null Set














\(\ds \)

\(=\)







\(\ds \int g \chi_{X \setminus N} \rd \mu\)





Definition of $N$














\(\ds \)

\(=\)







\(\ds \int g \chi_N \rd \mu + \int g \chi_{X \setminus N} \rd \mu\)





Integral of Integrable Function over Null Set














\(\ds \)

\(=\)







\(\ds \int \map g {\chi_N + \chi_{X \setminus N} } \rd \mu\)





Integral of Integrable Function is Additive














\(\ds \)

\(=\)







\(\ds \int g \chi_X \rd \mu\)





Characteristic Function of Union














\(\ds \)

\(=\)







\(\ds \int g \rd \mu\)





Characteristic Function of Universe




The term Characteristic Function of Union as used here has been identified as being ambiguous.In particular: This variant is not posted yetIf you are familiar with this area of mathematics, you may be able to help improve $\mathsf{Pr} \infty \mathsf{fWiki}$ by determining the precise term which is to be used.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Disambiguate}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
which establishes the result.
$\blacksquare$





