# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Everywhere_Dense



Theorem
The following definitions of the concept of Everywhere Dense are equivalent:

Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$ be a subset.

Definition 1
The subset $H$ is (everywhere) dense in $T$ if and only if:

$H^- = S$
where $H^-$ is the closure of $H$.

Definition 2
The subset $H$ is (everywhere) dense in $T$ if and only if the intersection of $H$ with every non-empty open set of $T$ is non-empty:

$\forall U \in \tau \setminus \set \O: H \cap U \ne \O$
Definition 3
The subset $H$ is (everywhere) dense in $T$ if and only if every neighborhood of every point of $S$ contains at least one point of $H$.


Proof
$(1)$ implies $(2)$
Let $H$ be a subset of $S$ which is everywhere dense in $T$ by definition $1$.
Then by definition:

$H^- = S$
where $H^-$ is the closure of $H$.

Aiming for a contradiction, suppose there exists $U \in \tau$ such that $U \cap H = \O$.
Let $x \in S$ such that $x \in U$.
Thus $U$ is an open set of $T$ which does not contain an element of $H$ which is distinct from $x$.
Indeed, $U$ is an open set of $T$ which does not contain any elements of $H$ at all.
Hence, by definition, $x$ is not a limit point of $H$.
By definition, the closure of $H$ is the union of $H$ with its limit points.
But $x$ is not in $H$, nor is it a limit point of $H$.
That is:

$x \notin H^-$
So $H^- \ne S$.
But this contradicts our definition of everywhere dense in $T$ by definition $1$.
Hence our assertion that there exists $U \in \tau$ such that $U \cap H = \O$ must be false.
So, by Proof by Contradiction:

$\forall U \in \tau: H \cap U \ne \O$

Thus $H$ is a subset of $S$ which is everywhere dense in $T$ by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $H$ be a subset of $S$ which is everywhere dense in $T$ by definition $2$.
Then by definition:

$\forall U \in \tau \setminus \set \O: H \cap U \ne \O$
It is taken for granted that $H^- \subseteq S$.

Aiming for a contradiction, suppose $H^- \ne S$.
Then:

$\exists x \in S: x \notin H^-$
Thus:

$x \notin H$
and also, $x$ is not a limit point of $H$.
Hence, by definition of limit point:

$\exists U \in \tau: \not \exists y \in U: y \in H$
Hence by definition of set intersection:

$U \cap H = \O$
But this contradicts our definition of everywhere dense in $T$ by definition $2$.
So, by Proof by Contradiction:

$H^- = S$

Thus $H$ is a subset of $S$ which is everywhere dense in $T$ by definition $1$.
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: Include Definition 3You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




