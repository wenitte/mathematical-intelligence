# 

Source: https://proofwiki.org/wiki/Big_Implies_Saturated


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\MM$ be an $\LL$-structure.
Let $\kappa$ be a cardinal.

If $\MM$ is $\kappa$-big, then it is $\kappa$-saturated.


Proof
The idea of the proof is:

to go to some elementary equivalent structure where a type is realized
and:

to interpret a new relation symbol as the singleton containing some realization of the type.
This lets us write sentences about the extension saying that:

there must exist an element satisfying the relation
and:

every element satisfying the relation satisfies all of the formulas in the type.
Then using bigness, these sentences carry over into $\MM$.

Let $p$ be a complete $n$-type over $A$, where $A$ is a subset of the universe of $\MM$ with cardinality strictly less than $\kappa$.

We are to show that $p$ is realized in $\MM$.

Let $\LL_A$ be the language obtained from $\LL$ by adding constant symbols for each element of $A$.
Viewing $\MM$ as an $\LL_A$-structure in the natural way, let $\map {\operatorname {Th}_A} \MM$ be the collection of $\LL_A$-sentences satisfied by $\MM$.

By definition of type, $p \cup \map {\operatorname {Th}_A} \MM$ is satisfiable by some $\LL_A$-structure $\NN$.

Since $\NN$ satisfies $p$, some $n$-ordered tuple $\bar b$ in it realizes $p$.

Now, let $\LL_A^*$ be the language obtained from $\LL_A$ by adding a new relation symbol $R$.
We can extend $\NN$ to be an $\LL_A^*$-structure by interpreting the symbol $R$ as the singleton $R^\NN = \set {\bar b}$.

Since $\NN \models \map {\operatorname {Th}_A} \MM$, we have that $\MM$ and $\NN$ are elementary equivalent as $\LL_A$-structures.

We have that $\MM$ is $\kappa$-big by assumption.
Hence there is some relation $R^\MM$ on the universe of $\MM$ such that:

$\struct {\MM, R^\MM}$ is elementary equivalent to $\struct {\NN, R^\NN}$ as $\LL_A^*$-structures.

But $\struct {\NN, R^\NN}$ satisfies the $\LL_A^*$-sentences:

$\exists \bar x \map R {\bar x}$
and

$\forall \bar x \paren {\map R {\bar x} \to \map \phi {\bar x} }$
for each $\map \phi {\bar x}$ in $p$.

Hence $\struct {\MM, R^\MM}$ also satisfies these sentences, and so there must be some $\bar d \in R^\MM$ realizing $p$.
So $\MM$ realizes $p$.
$\blacksquare$





