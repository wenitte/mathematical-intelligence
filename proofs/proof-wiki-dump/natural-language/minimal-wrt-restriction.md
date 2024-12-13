# 

Source: https://proofwiki.org/wiki/Minimal_WRT_Restriction


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $A$ be a set or class.
Let $\RR$ be a relation on $A$.
Let $B$ be a subset or subclass of $A$.
Let $\RR'$ be the restriction of $\RR$ to $B$.
Let $m \in B$.

Then:

$m$ is a strictly minimal element under $\RR$ in $B$
if and only if:

$m$ is a strictly minimal element under $\RR'$ in $B$.


Proof
Sufficient Condition
Let $m$ be a strictly minimal element under $\RR$ in $B$.
Let $x$ be any element of $B$.
Aiming for a contradiction, suppose that $x \mathrel {\RR'} m$.
Then since $\RR' \subseteq \RR$:

$x \mathrel \RR m$
contradicting the fact that $m$ is a strictly minimal element under $\RR$ in $B$.
Thus:

$\lnot \paren {x \mathrel {\RR'} m}$
As this holds for all $x \in B$, $m$ is a strictly minimal element under $\RR'$ in $B$.
$\Box$


Necessary Condition
Let $m$ be a strictly minimal element under $\RR'$ in $B$.
Let $x \in B$.
Aiming for a contradiction, suppose that $x \mathrel \RR m$.
Then $x, m \in B$.
Therefore:

$\tuple {x, m} \in B \times B$
Thus:

$\tuple {x, m} \in \RR \cap \paren {B \times B} = \RR'$
so $x \mathrel {\RR'} m$
This contradicts the fact that $m$ is a strictly minimal element under $\RR'$ in $B$.
Thus:

$\lnot \paren {x \mathrel \RR m}$
As this holds for all $x \in B$, it follows that $m$ is a strictly minimal element under $\RR$ in $B$.
$\blacksquare$





