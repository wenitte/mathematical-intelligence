# 

Source: https://proofwiki.org/wiki/Mapping_on_Integers_is_Endomorphism_of_Max_or_Min_Operation_iff_Increasing



Theorem
Let $\Z$ denote the set of integers.
Let $f: \Z \to \Z$ be a mapping on $\Z$.
Let $\vee$ and $\wedge$ be the max operation and min operation on $\Z$ defined as:










\(\ds \forall x, y \in \Z: \, \)



\(\ds x \vee y\)

\(=\)







\(\ds \max \set {x, y}\)




















\(\ds x \wedge y\)

\(=\)







\(\ds \min \set {x, y}\)










Then:

$f$ is an endomorphism of $\struct {\Z, \vee}$ or $\struct {\Z, \wedge}$
if and only if:

$f$ is an increasing mapping.


Proof
Necessary Condition
Suppose $f$ is an increasing mapping.
Let $x, y \in \Z$ and suppose $x \le y$.
By definition of an increasing mapping, we have $\map f x \le \map f y$.
Therefore:

$\map f x \vee \map f y = \map f y = \map f {x \vee y}$
$\map f x \wedge \map f y = \map f x = \map f {x \wedge y}$
Hence $f$ is an endomorphism of $\struct {\Z, \vee}$ and $\struct {\Z, \wedge}$.
As Conjunction implies Disjunction,  $f$ is an endomorphism of $\struct {\Z, \vee}$ or $\struct {\Z, \wedge}$.
$\Box$


Sufficient Condition
Suppose $f$ is an endomorphism of $\struct {\Z, \vee}$.
Then for any $x, y \in \Z$, we have:

$\map f x \vee \map f y  = \map f {x \vee y}$
Without loss of generality suppose $x \le y$.
Then we have:

$\map f y = \map f {x \vee y} = \map f x \vee \map f y$
and thus:

$\map f x \le \map f y$
Hence $f$ is an increasing mapping.

Now suppose $f$ is an endomorphism of $\struct {\Z, \wedge}$.
Then for any $x, y \in \Z$, we have:

$\map f x \wedge \map f y  = \map f {x \wedge y}$
Without loss of generality suppose $x \le y$.
Then we have:

$\map f x = \map f {x \wedge y} = \map f x \wedge \map f y$
and thus:

$\map f x \le \map f y$
Hence $f$ is an increasing mapping.

Therefore if $f$ is an endomorphism of either $\struct {\Z, \vee}$ or $\struct {\Z, \wedge}$, $f$ is an increasing mapping.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 12$: Homomorphisms: Exercise $12.8$




