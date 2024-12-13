# 

Source: https://proofwiki.org/wiki/Mapping_on_Integers_is_Homomorphism_between_Max_or_Min_Operation_iff_Decreasing



Theorem
Let $\Z$ denote the set of integers.
Let $f: \Z \to \Z$ be a mapping on $\Z$.


This article needs to be linked to other articles.In particular: min and max operations are defined on PWYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Let $\vee$ and $\wedge$ be the operations on $\Z$ defined as:










\(\ds \forall x, y \in \Z: \, \)



\(\ds x \vee y\)

\(=\)







\(\ds \max \set {x, y}\)




















\(\ds x \wedge y\)

\(=\)







\(\ds \min \set {x, y}\)










Then:

$f$ is a homomorphism either from $\struct {\Z, \vee}$ to $\struct {\Z, \wedge}$ or from $\struct {\Z, \wedge}$ to $\struct {\Z, \vee}$
if and only if:

$f$ is a decreasing mapping.


Proof
Necessary Condition
Let $f$ be a decreasing mapping.
Let $x, y \in \Z$ such that $x \le y$.
By definition of a decreasing mapping, we have $\map f x \ge \map f y$.
Therefore:

$\map f x \vee \map f y = \map f x = \map f {x \wedge y}$
$\map f x \wedge \map f y = \map f y = \map f {x \vee y}$
Hence:

$f$ is a homomorphism from $\struct {\Z, \vee}$ to $\struct {\Z, \wedge}$
and also:

$f$ is a homomorphism from $\struct {\Z, \wedge}$ to $\struct {\Z, \vee}$
As Conjunction implies Disjunction,  $f$ is a homomorphism from $\struct {\Z, \vee}$ to $\struct {\Z, \wedge}$ or from $\struct {\Z, \wedge}$ to $\struct {\Z, \vee}$.
$\Box$


Sufficient Condition
Suppose $f$ is a homomorphism from $\struct {\Z, \wedge}$ to $\struct {\Z, \vee}$.
Then for any $x, y \in \Z$, we have:

$\map f {x \wedge y} = \map f x \vee \map f y$
Without loss of generality suppose $x \le y$.
Then we have:

$\map f x = \map f {x \wedge y} = \map f x \vee \map f y$
and thus:

$\map f x \ge \map f y$
Hence $f$ is a decreasing mapping.

Now suppose $f$ is a homomorphism from $\struct {\Z, \vee}$ to $\struct {\Z, \wedge}$.
Then for any $x, y \in \Z$, we have:

$\map f {x \vee y} = \map f x \wedge \map f y$
Without loss of generality suppose $x \le y$.
Then we have:

$\map f y = \map f {x \vee y} = \map f x \wedge \map f y$
and thus:

$\map f x \ge \map f y$
Hence $f$ is a decreasing mapping.

Therefore if $f$ is a homomorphism either from $\struct {\Z, \vee}$ to $\struct {\Z, \wedge}$ or from $\struct {\Z, \wedge}$ to $\struct {\Z, \vee}$, $f$ is a decreasing mapping.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.8$




