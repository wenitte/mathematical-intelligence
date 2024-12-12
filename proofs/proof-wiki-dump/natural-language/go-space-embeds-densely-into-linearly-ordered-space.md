# 

Source: https://proofwiki.org/wiki/GO-Space_Embeds_Densely_into_Linearly_Ordered_Space


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\struct {Y, \preceq, \tau}$ be a generalized ordered space (GO-space) by Definition 3.
That is:

let $\struct {Y, \tau}$ be a Hausdorff space
and:

let $\tau$ have a sub-basis consisting of upper sections and lower sections relative to $\preceq$.

Then $\struct {Y, \preceq, \tau}$ is a GO-space by Definition 2.
That is, there is a linearly ordered space $\struct {X, \preceq', \tau'}$ and a mapping from $Y$ to $X$ which is a order embedding and a topological embedding.


Proof
Let $X$ be the disjoint union of $Y$ with the set of all lower sections $L$ in $Y$ such that $L$ and $Y \setminus L$ are open and nonempty and either:

$L$ has a maximum, and $Y\setminus L$ does not have a minimum, or
$Y \setminus L$ has a minimum, and $L$ does not have a maximum.
Let $\phi: Y \to X$ be the inclusion mapping.
In the following, let $y$, $y_1$, $y_2$, and $y_3$ represent elements of $Y$, and let $L$, $L_1$, $L_2$, and $L_3$ represent lower sections of $Y$ that are members of $X$.
Define a relation $\preceq'$ extending $\preceq$ by letting:

$y_1 \preceq' y_2 \iff y_1 \preceq y_2$
$y \preceq' L \iff y \in L$
$L_1 \preceq' L_2 \iff L_1 \subseteq L_2$
$L \preceq' y \iff y \in Y \setminus L$
By Union of Total Ordering with Lower Sections is Total Ordering and Restriction of Total Ordering is Total Ordering, $\preceq'$ is a total ordering.
Because $y_1 \preceq' y_2$ iff $y_1 \preceq y_2$, $\phi$ is an order embedding.
Let $\tau'$ be the $\preceq'$ order topology on $X$.


$\phi$ is a topological embedding of $\struct {Y, \tau}$ into $\struct {X, \tau'}$
Let $L^\succeq$ and $L^\succ$ represent the upper closure and strict upper closure of $L$ with respect to $\preceq$.
Let $L^{\succeq'}$ and $L^{\succ'}$ represent the upper closure and strict upper closure with respect to $\preceq'$.
Let $L^\preceq$ and $L^\prec$ represent the lower closure and strict lower closure of $L$ with respect to $\preceq$.
Let $L^{\preceq'}$ and $L^{\prec'}$ represent the lower closure and strict lower closure with respect to $\preceq'$.

Open rays from elements of $Y$ are $\tau$-open by Open Ray is Open in GO-Space.
$L^{\preceq'} \cap Y = L$, which is open.
$L^{\succeq'} \cap Y = Y \setminus L$, which is open.
Thus the subspace topology is coarser than $\tau$.

Let $U$ be an open upper section in $Y$ with $\O \subsetneqq U \subsetneqq Y$.

Let $U$ have no minimum.
Then by Upper Section with no Smallest Element is Open in GO-Space, $U$ is open in the subspace topology.

Let $Y \setminus U$ has a maximum $p$.
Then $U = p^\succ = Y \cap p^{\succ'}$, which is open in the subspace topology.

Otherwise, by Lower Section with no Greatest Element is Open in GO-Space, $Y \setminus U$ is open.
Therefore $Y \setminus U \in X$.
Then:

$U = Y \cap \paren {Y \setminus U}^{\succ'}$

A similar argument works for open lower sections.
Thus it follows that the subspace topology is finer than $\tau$.
Thus they are equal by definition of set equality.
$\Box$


$Y$ is dense in $X$
Let $L \in X \setminus Y$.
By the definition of $X$, $L$ and $Y \setminus L$ are non-empty.
So:

$L$ is $\preceq'$-preceded by at least one element of $Y$
$L$ is $\preceq'$-succeeded by at least one element of $Y$.
Thus every open ray in $X$ containing $L$ contains an element of $Y$.
Let $x_1, x_2 \in X$ such that $x_1 \prec' L \prec' x_2$.
By the definition of $X$, either:

$L$ has a $\preceq$-greatest element and $Y \setminus L$ has no $\preceq$-smallest element
or:

$L$ has no $\preceq$-greatest element and $Y \setminus L$ has a $\preceq$-smallest element.

Suppose that $L$ has a $\preceq$-greatest element and $Y \setminus L$ has no $\preceq$-smallest element.
Let $x_2 \in Y$.
Then $x_2 \in Y \setminus L$.
Since $Y \setminus L$ has no $\preceq$-smallest element, there is an element $q\in Y \setminus L$ such that $q \prec x_2$.
Then $x_1 \prec L \prec' q \prec' x_2$.
Therefore:

$q \in Y \cap \openint {x_1} {x_2}$
On the other hand, let $x_2 \notin Y$.
Then $L \subsetneqq x_2$.
Then there is some $q \in x_2 \setminus L$.
Therefore:

$x_1 \prec' L \prec' q \prec' x_2$
In particular:

$q \in Y \cap \openint {x_1} {x_2}$
If on the other hand we had supposed that $L$ has no $\preceq$-greatest element and $Y \setminus L$ has a $\preceq$-smallest element, we could obtain similar results, with $x_1$ taking on the role we have given $x_2$.
Thus in any case, $L$ is an adherent point of $Y$.
Since every element of $X \setminus Y$ is an adherent point of $Y$, $Y$ is dense in $X$.
Thus the inclusion map from $Y$ to $X$ is a topological embedding and an order embedding of $\struct {Y, \preceq, \tau}$ as a dense subspace of $\struct {X, \preceq', \tau'}$.
$\blacksquare$





