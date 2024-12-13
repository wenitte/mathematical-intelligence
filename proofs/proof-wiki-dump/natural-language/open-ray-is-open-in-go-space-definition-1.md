# 

Source: https://proofwiki.org/wiki/Open_Ray_is_Open_in_GO-Space/Definition_1


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\struct {S, \preceq, \tau}$ be a generalized ordered space.
Let $p \in S$.

Then:

$p^\prec$ and $p^\succ$ are $\tau$-open
where:

$p^\prec$ is the strict lower closure of $p$
$p^\succ$ is the strict upper closure of $p$.


Proof
We will prove that $U = p^\succ$ is $\tau$-open.
That $p^\prec$ is $\tau$-open will follow by duality.
Let $u \in U$.
Since $p \notin U$, $p \ne u$.
By definition of GO-space, $\tau$ is Hausdorff.
From $T_2$ Space is $T_1$ Space, $\tau$ is $T_1$.
Thus by definition of GO-space, there is an open, convex set $M$ such that $u \in M$ and $p \notin M$.
Next we will show that $M \subseteq U$:
Let $x \in S \setminus U$.
Then $x \preceq p \preceq u$.
Aiming for a contradiction, suppose $x \in M$.
Since $x, u \in M$, $p \in M$ because $M$ is convex, contradicting the choice of $M$.
Thus $x \notin M$.
Since this hold for all $x \in S \setminus U$, $M \subseteq U$.
Thus $U$ contains a neighborhood of each of its points.
From Set is Open iff Neighborhood of all its Points, $U$ is open.
$\blacksquare$





