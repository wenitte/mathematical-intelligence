# 

Source: https://proofwiki.org/wiki/Fr%C3%A9chet_Filter_is_Filter



Theorem
Let $S$ be an infinite set.
Let $\FF$ be the Fréchet filter on $S$.
Then $\FF$ is a filter on $S$.


Proof
By definition, $\FF$ must satisfy the filter on set axioms:




\((\text F 1)\)  

$:$  







\(\ds S \in \FF \)   







  


\((\text F 2)\)  

$:$  







\(\ds \O \notin \FF \)   







  


\((\text F 3)\)  

$:$  







\(\ds U, V \in \FF \implies U \cap V \in \FF \)   







  


\((\text F 4)\)  

$:$  







\(\ds \forall U \in \FF: U \subseteq V \subseteq S \implies V \in \FF \)   







  



$\paren {\text F 1}$
By Set Difference with Self is Empty Set:

$S \setminus S = \O$
By Cardinality of Empty Set, $\O$ is finite.
Therefore, $S$ is cofinite in $S$ by definition.
Thus, by definition of Fréchet filter:L

$S \in \FF$
$\Box$


$\paren {\text F 2}$
By Set Difference with Empty Set is Self:

$S \setminus \O = S$
But by hypothesis, $S$ is infinite.
Therefore, $\O$ is not cofinite in $S$ by definition.
Thus, by definition of Fréchet filter:

$\O \notin \FF$
$\Box$


$\paren {\text F 3}$
Let $U, V \in \FF$.
Then, by definition of Fréchet filter, $U$ and $V$ are cofinite in $S$.
That is, $S \setminus U$ and $S \setminus V$ are finite.
Thus, by Union of Finite Sets is Finite, $\paren {S \setminus U} \cup \paren {S \setminus V}$ is finite.
But by Difference with Intersection:

$S \setminus \paren {U \cap V} = \paren {S \setminus U} \cup \paren {S \setminus V}$
Therefore, $S \setminus \paren {U \cap V}$ is finite.
Thus, by definition, $U \cap V$ is cofinite in $S$.
Then, by definition of Fréchet filter, $U \cap V \in \FF$.
$\Box$


$\paren {\text F 4}$
Let $U \in \FF$.
Let $V$ be a set such that $U \subseteq V \subseteq S$.
Then, by Set Difference with Subset is Superset of Set Difference:

$S \setminus V \subseteq S \setminus U$
By definition of Fréchet filter, $U$ is cofinite in $S$.
That is, $S \setminus U$ is finite.
But then, by Subset of Finite Set is Finite, $S \setminus V$ is finite.
Thus, $V$ is cofinite in $S$ by definition.
Therefore, $V \in \FF$, by definition of Fréchet filter.
$\Box$

As $\FF$ satisfies the filter on set axioms, it is a filter on $S$ by definition.
$\blacksquare$





