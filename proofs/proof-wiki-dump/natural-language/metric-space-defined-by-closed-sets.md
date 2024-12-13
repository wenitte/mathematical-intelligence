# 

Source: https://proofwiki.org/wiki/Metric_Space_defined_by_Closed_Sets

Theorem
Let $M = \struct {A, d}$ be a metric space.
Then:




\((\text C 1)\)  

$:$  



$A$ is closed in $M$   











  


\((\text C 2)\)  

$:$  



$\O$ is closed in $M$   











  


\((\text C 3)\)  

$:$  



The union of a finite number of closed sets of $M$ is a closed set of $M$   











  


\((\text C 4)\)  

$:$  



The intersection of arbitrarily many closed sets of $M$ is a closed set of $M$   











  



Proof
From Metric Space is Closed in Itself, $\text C 1$ holds.
$\Box$

From Empty Set is Closed in Metric Space, $\text C 2$ holds.
$\Box$

Let $\ds \bigcup_{i \mathop = 1}^n V_i$ be the union of a finite number of closed sets of $M$.
Then from De Morgan's laws:

$\ds A \setminus \bigcup_{i \mathop = 1}^n V_i = \bigcap_{i \mathop = 1}^n \paren {A \setminus V_i}$
By definition of closed set, each of the $A \setminus V_i$ is by definition open in $M$.
We have that $\ds \bigcap_{i \mathop = 1}^n \paren {A \setminus V_i}$ is the intersection of a finite number of open sets of $M$.
Therefore, by Finite Intersection of Open Sets of Metric Space is Open, $\ds \bigcap_{i \mathop = 1}^n \paren {A \setminus V_i} = A \setminus \bigcup_{i \mathop = 1}^n V_i$ is likewise open in $M$.
Then by definition of closed set, $\ds \bigcup_{i \mathop = 1}^n V_i$ is closed in $M$.
Thus $\text C 3$ holds.
$\Box$

Let $I$ be an indexing set (either finite or infinite).
Let $\ds \bigcap_{i \mathop \in I} V_i$ be the intersection of a indexed family of closed sets of $M$ indexed by $I$.
Then from De Morgan's laws:

$\ds A \setminus \bigcap_{i \mathop \in I} V_i = \bigcup_{i \mathop \in I} \paren {A \setminus V_i}$
By definition of closed set, each of $A \setminus V_i$ are by definition open in $M$.
We have that $\ds \bigcup_{i \mathop \in I} \paren {A \setminus V_i}$ is the union of a family of open sets of $M$ indexed by $I$.
Therefore, by definition of a topology, $\ds \bigcup_{i \mathop \in I} \paren {A \setminus V_i} = A \setminus \bigcap_{i \mathop \in I} V_i$ is likewise open in $M$.
Then by definition of closed set, $\ds \bigcap_{i \mathop \in I} V_i$ is closed in $M$.
Thus $\text C 4$ holds.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Theorem $6.11$




