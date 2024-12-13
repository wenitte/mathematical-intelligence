# 

Source: https://proofwiki.org/wiki/Lower_Adjoint_Preserves_All_Suprema

Theorem
Let $\left({S, \preceq}\right)$, $\left({T, \precsim}\right)$ be ordered sets.
Let $d: T \to S$ be an lower adjoint of Galois connection.

Then $d$ preserves all suprema.


Proof
By definition of lower adjoint

$\exists g: S \to T: \left({g, d}\right)$ is a Galois connection
Let $X$ be a subset of $T$ such that

$X$ admits a supremum.
We will prove as lemma 1 that

$\forall s \in S: s$ is upper bound for $d^\to\left({X}\right) \implies d\left({\sup X}\right) \preceq s$
Let $s \in S$ such that

$s$ is upper bound for $d^\to\left({X}\right)$
We will prove as sublemma that

$g\left({s}\right)$ is upper bound for $X$
Let $t \in X$.
By definition of image of set:

$d \left({t})\right) \in d^\to \left({X}\right)$
By definition of upper bound:

$d\left({t}\right) \preceq s$
Thus by definition of Galois connection:

$t \precsim g\left({s}\right)$
This ends the proof of sublemma.
By definition of supremum:

$\sup X \precsim g\left({t}\right)$
Thus by definition of Galois connection:

$d\left({\sup X}\right) \preceq t$
This ends the proof of lemma 1.

We will prove as lemma 2 that

$d\left({\sup X}\right)$ is upper bound for $d^\to\left({X}\right)$
Let $s \in d^\to\left({X}\right)$.
By definition of image of set:

$\exists t \in T: t \in X \land d\left({t}\right) = s$
By definition of supremum:

$\sup X$ is upper bound for $X$
By definition of upper bound:

$t \precsim \sup X$
By definition of Galois connection:

$d$ is increasing mapping.
Thus by definition of increasing mapping:

$s \preceq d\left({\sup X}\right)$
This ends the proof of lemma 2.

Thus by definition of supremum:

$d^\to\left({X}\right)$ admits a supremum
and

$\sup\left({d^\to\left({X}\right)}\right) = d\left({\sup X}\right)$
Thus by definition:

$g$ preserves supremum on $X$
Thus by definition:

$g$ preserves all suprema.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:13




