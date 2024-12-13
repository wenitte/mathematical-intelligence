# 

Source: https://proofwiki.org/wiki/Linear_Transformation_between_Normed_Vector_Spaces_is_Open_iff_Image_of_Open_Unit_Ball_is_Open



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces over $\GF$. 
Let $T : X \to Y$ be a linear transformation.
Let $B_X^O$ be the open unit ball of $X$.

Then $T$ is open if and only if $T \sqbrk {B_X^O}$ is open.


Proof
Necessary Condition
Suppose that $T$ is open.
From Open Ball is Open Set, $B_X^O$ is open in $\struct {X, \norm {\, \cdot \,}_X}$.
So $T \sqbrk {B_X^O}$ is  open in $\struct {Y, \norm {\, \cdot \,}_Y}$.
$\Box$

Sufficient Condition
Suppose that $T \sqbrk {B_X^O}$ is open.
Let $U$ be an open set in $X$.
From the definition of an open set:

for each $x \in U$ there exists $\epsilon_x > 0$ such that:
$x + \epsilon_x B_X^O \subseteq U$
Then we have: 

$\ds U = \bigcup_{x \in U} \paren {x + \epsilon_x B_X^O}$
Hence:














\(\ds T \sqbrk U\)

\(=\)







\(\ds T \sqbrk {\bigcup_{x \in U} \paren {x + B_X^O} }\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{x \in U} T \sqbrk {x + \epsilon_x B_X^O}\)





Image of Union under Mapping: General Result














\(\ds \)

\(=\)







\(\ds \bigcup_{x \in U} \paren {T x + T \sqbrk {\epsilon_x B_X^O} }\)





Image of Translation of Set under Linear Transformation is Translation of Image














\(\ds \)

\(=\)







\(\ds \bigcup_{x \in U} \paren {T x + \epsilon_x T \sqbrk {B_X^O} }\)





Image of Dilation of Set under Linear Transformation is Dilation of Image



From Dilation of Open Set in Normed Vector Space is Open:

$\epsilon_x T \sqbrk {B_X^O}$ is open for each $x \in U$.
From Translation of Open Set in Normed Vector Space is Open

$T x + \epsilon_x T \sqbrk {B_X^O}$ is open for each $x \in U$.
Hence from the definition of a topology:

$\ds T \sqbrk U = \bigcup_{x \in U} \paren {T x + \epsilon_x T \sqbrk {B_X^O} }$ is open.
So $T \sqbrk U$ is open in $\struct {Y, \norm {\, \cdot \,}_Y}$ whenever $U$ is open in $\struct {X, \norm {\, \cdot \,}_X}$.
So $T$ is an open mapping. 
$\blacksquare$





