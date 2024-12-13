# 

Source: https://proofwiki.org/wiki/Intersection_of_Unions_with_Complements_is_Subset_of_Union



Theorem
Let $R, S, T$ be sets.
Then:

$\left({R \cup S}\right) \cap \left({\overline R \cup T}\right) \subseteq S \cup T$


Proof
Let $x \in \left({R \cup S}\right) \cap \left({\overline R \cup T}\right)$.
Then by definition of set intersection, set union and set complement, we have:

$\left({x \in R \lor x \in S}\right) \land \left({x \notin R \lor x \in T}\right)$
From Conjunction of Disjunctions with Complements implies Disjunction‎ it follows that:

$x \in S \lor x \in T$
By definition of set union, it follows that:

$x \in S \cup T$
By definition of subset it follows that:

$\left({R \cup S}\right) \cap \left({\overline R \cup T}\right) \subseteq S \cup T$
$\blacksquare$


Illustration by Venn Diagram
A Venn diagram illustrating this result is given below:


The red and purple field together mark $R \cup S$.
The blue and purple field together mark $\overline R \cup T$. Note that the outer rectangular area is also included in this, but has been left colorless for clarity.
The purple field marks $\left({R \cup S}\right) \cap \left({\overline R \cup T}\right)$, where the red and blue intersect with each other.


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 5$: Complements and Powers




