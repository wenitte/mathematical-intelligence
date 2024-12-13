# 

Source: https://proofwiki.org/wiki/P-adic_Norm_not_Complete_on_Rational_Numbers/Proof_3

Theorem
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rationals $\Q$ for some prime $p$.
Then:

the valued field $\struct {\Q, \norm {\,\cdot\,}_p}$ is not complete.

That is, there exists a Cauchy sequence in $\struct {\Q, \norm{\,\cdot\,}_p}$ which does not converge to a limit in $\Q$.


Proof
By Rational Numbers are Countably Infinite, the set of rational numbers is countably infinite.
By P-adic Numbers are Uncountable, the set of $p$-adic numbers $\Q_p$ is uncountably infinite.
Let $\CC$ be the commutative ring of Cauchy sequences over $\struct {\Q, \norm {\,\cdot\,}_p}$.
Let $\NN$ be the set of null sequences in $\struct {\Q, \norm {\,\cdot\,}_p}$.
The $p$-adic numbers $\Q_p$ is the quotient ring $\CC \, \big / \NN$ by definition.
By Embedding Division Ring into Quotient Ring of Cauchy Sequences, the mapping $\phi: \Q \to \Q_p$ defined by:

$\map \phi r = \sequence {r, r, r, \dotsc} + \NN$
where $\sequence {r, r, r, \dotsc} + \NN$ is the left coset in $\CC \, \big / \NN$ that contains the constant sequence $\sequence {r, r, r, \dotsc}$, is a distance-preserving monomorphism.
By Corollary to Surjection from Natural Numbers iff Countable then $\phi$ is not a surjection.
Hence:

$\exists \sequence {x_n} \in \CC: \sequence {x_n} + \NN \not \in \map \phi \Q$
By Cauchy Sequence Converges Iff Equivalent to Constant Sequence then $\sequence {x_n}$ is not convergent in $\struct {\Q, \norm {\,\cdot\,}_p}$.
The result follows.
$\blacksquare$





