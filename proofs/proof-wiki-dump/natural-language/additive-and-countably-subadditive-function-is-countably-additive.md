# 

Source: https://proofwiki.org/wiki/Additive_and_Countably_Subadditive_Function_is_Countably_Additive

Theorem
Let $\Sigma$ be a $\sigma$-algebra over a set $X$.
Let $f: \Sigma \to \overline \R_{\ge 0}$ be an additive and countably subadditive function, where $\overline \R_{\ge 0}$ denotes the set of positive extended real numbers.

Then $f$ is countably additive.


Proof

This has to be rewritten.In particular: Eqn templates would be good, I thinkYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by doing so.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Rewrite}} from the code.
Let $\sequence {S_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint elements of $\Sigma$.
Let $N \in \N$ be any natural number.
By Set is Subset of Union:

$\ds \bigcup_{n \mathop = 0}^N S_n \subseteq \bigcup_{n \mathop = 0}^\infty S_n$
From Non-Negative Additive Function is Monotone:

$\ds \map f {\bigcup_{n \mathop = 0}^N S_n} \le \map f {\bigcup_{n \mathop = 0}^\infty S_n}$

Also, from Finite Union of Sets in Additive Function:

$\ds \map f {\bigcup_{n \mathop = 0}^N S_n} = \sum_{n \mathop = 0}^N \map f {S_n}$
Hence:

$\ds \sum_{n \mathop = 0}^N \map f {S_n} \le \map f {\bigcup_{n \mathop = 0}^\infty S_n}$

Work In ProgressIn particular: Lower and Upper Bounds for Sequences still needs generalization to $\overline \R$ before it can be applied hereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Taking the limit as $N \to \infty$, it follows by Lower and Upper Bounds for Sequences that:

$\ds \sum_{n \mathop = 0}^\infty \map f {S_n} \le \map f {\bigcup_{n \mathop = 0}^\infty S_n}$
The reverse inequality holds because of the countable subadditivity of $f$, and thus equality holds.
$\blacksquare$





