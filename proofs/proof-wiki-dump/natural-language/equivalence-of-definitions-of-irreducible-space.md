# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Irreducible_Space



Theorem
The following definitions of the concept of Irreducible Space are equivalent:

Definition 1
A topological space $T = \struct {S, \tau}$ is irreducible if and only if there exists no cover of $T$ by two proper closed sets of $T$.

Definition 2
A topological space $T = \struct {S, \tau}$ is irreducible if and only if there is no finite cover of $T$ by proper closed sets of $T$.

Definition 3
A topological space $T = \struct {S, \tau}$ is irreducible if and only if every two non-empty open sets of $T$ have non-empty intersection:

$\forall U, V \in \tau: U, V \ne \O \implies U \cap V \ne \O$
Definition 4
A topological space $T = \struct {S, \tau}$ is irreducible if and only if every non-empty open set of $T$ is (everywhere) dense in $T$.

Definition 5
A topological space $T = \struct {S, \tau}$ is irreducible if and only if the interior of every proper closed set of $T$ is empty.

Definition 6
A topological space $T = \struct {S, \tau}$ is irreducible if and only if the closure of every non-empty open set is the whole space:

$\forall U \in \tau: U \ne \O \implies U^- = S$
Definition 7
A topological space $T = \struct {S, \tau}$ is irreducible if and only if every open set of $T$ is connected.


Proof
$(1)$ implies $(2)$
Let $T$ be an irreducible space by Definition 1.
That is, $T$ is not the union of any two proper closed sets.
Aiming for a contradiction, suppose $T$ admits a finite cover by proper closed sets.
By the Well-Ordering Principle, there exists a minimal natural number $n \in \N$ such that $T$ has a cover by $n$ proper closed sets, say $F_1, \ldots, F_n$.
By definition of proper subset, it must be the case that $n > 1$.
By Finite Union of Closed Sets is Closed in Topological Space, $F_{n - 1} \cup F_n$ is closed.
By Union is Associative:

$S = F_1 \cup \cdots \cup \paren {F_{n - 1} \cup F_n}$
By minimality of $n$, $F_{n - 1} \cup F_n$ is not a proper subset.
Thus $F_{n - 1} \cup F_n = S$.
This contradicts the definition of an irreducible space by Definition 1.
Thus $T$ has no finite cover by proper closed sets.
That is, $T$ is an irreducible space by Definition 2.
$\Box$


$(2)$ implies $(1)$
Let $T$ be an irreducible space by Definition 2.
Then $T$ has no finite cover by proper closed sets.
A cover by two sets is a finite cover.
Hence it immediately follows that $T$ has no finite cover by $2$ proper closed sets.
That is, $T$ is an irreducible space by Definition 1.
$\Box$


$(1)$ implies $(3)$
Let $T$ be an irreducible space by Definition 1.
That is, $T$ is not the union of any two proper closed sets.
Let $U$ and $V$ be two arbitrary non-empty open sets of $T$.
Aiming for a contradiction, suppose $U$ and $V$ have an empty intersection.
By De Morgan's Laws, their complements are proper closed sets whose union is $T$.
This contradicts the definition of an irreducible space by Definition 1.
Thus:

$U \cap V \ne \O$
As $U$ and $V$ are arbitrary, it follows that $T$ is an irreducible space by Definition 3.
$\Box$


$(3)$ implies $(1)$
Let $T$ be an irreducible space by Definition 3.
Let $F$ and $G$ be two arbitrary proper closed sets of $T$
Aiming for a contradiction, suppose their union is $T$.
By De Morgan's Laws, their complements are non-empty open sets whose intersection is empty.
This contradicts the definition of an irreducible space by Definition 3.
Thus $F \cup G \ne T$.
As $F$ and $G$ are arbitrary, it follows that $T$ is an irreducible space by Definition 1.
$\Box$


$(3)$ iff $(4)$
By definition of everywhere dense subset, an open set is dense if and only if it has non-empty intersection with any other open set.
$\Box$


$(4)$ iff $(5)$
Follows from Everywhere Dense iff Interior of Complement is Empty.
$\Box$


$(3)$ iff $(6)$
Let $T = \struct {S, \tau}$ be an irreducible space by Definition 3.
That is, let every non-empty open set in $T$ have a non-empty intersection with every other non-empty  open set.
Let $U \in \tau$ be open in $T$ such that $U \ne \O$.
If $U = S$ then $U^- = S$ trivially.

So, let $U \ne S$.
Let $x \in S$ such that $x \ne U$.
Let $V$ be any non-empty open set of $T$ such that $x \in V$.
By hypothesis, $U \cap V \ne \O$.
Therefore $V$ contains some point of $U$ distinct from $x$.
$V$ is arbitrary, so it follows that every open set $V$ of $T$ such that $x \in V$ contains some point of $U$ distinct from $x$.
That is, $x$ is a limit point of $U$.
So every point of $T$ is a limit point of $U$.
Thus, by definition, every point of $T$ is in the closure of $U$.

The argument reverses directly.
$\Box$


$(3)$ iff $(7)$
Open Sets Intersect implies Open Sets are Connected
Let $T = \struct {S, \tau}$ be irreducible in the sense that:

no two non-empty open sets of $T$ are disjoint.

Let $U \subseteq S$ be an open set of $T$.
Aiming for a contradiction, suppose $U$ is not connected.
Then there exist non-empty open sets $V, W$ of $U$ that are disjoint and whose union is $U$.
By Open Set in Open Subspace, $V$ and $W$ are open sets of $T$.
Because $V \cap W = \O$, $T$ is not irreducible.
This is a contradiction.
Thus $U$ is connected.

Thus $T = \struct {S, \tau}$ is irreducible in the sense that:

every open set of $T$ is connected..
$\Box$


Open Sets are Connected implies Open Sets Intersect
Let $T = \struct {S, \tau}$ be irreducible in the sense that:

every open set of $T$ is connected.

Let $V$ and $W$ be open sets of $T$.
By definition of topology, their union $V \cup W$ is open in $T$.
By hypothesis, $V \cup W$ is connected.
By Open Set in Open Subspace, $V$ and $W$ are open sets of $V \cup W$.
Because $V \cup W$ is connected, $V \cap W$ is non-empty.
Because $V$ and $W$ were arbitrary, $T$ is irreducible.

Thus $T = \struct {S, \tau}$ is irreducible in the sense that:

no two non-empty open sets of $T$ are disjoint.
$\blacksquare$





