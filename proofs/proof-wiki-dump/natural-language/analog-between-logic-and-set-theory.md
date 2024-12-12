# 

Source: https://proofwiki.org/wiki/Analog_between_Logic_and_Set_Theory

Theorem
The concepts of set theory have directly corresponding concepts in logic:




Set Theory

Logic


Set: $S, T$

Statement: $p, q$


Union: $S \cup T$

Disjunction: $p \lor q$


Intersection: $S \cap T$

Conjunction: $p \land q$


Subset: $S \subseteq T$

Conditional: $p \implies q$


Symmetric Difference: $S \symdif T$

Exclusive Or: $p \oplus q$


Complement: $\relcomp {} S$

Logical Not: $\lnot p$


Set Equality: $S = T$

Biconditional: $p \iff q$


Venn Diagram

Truth Table



Proof
Let $P$ and $Q$ be propositional functions.
Let $S$ and $T$ be subsets of a universe $\Bbb U$ such that:

$S = \set {x \in \Bbb U: \map P x}$
$T = \set {x \in \Bbb U: \map Q x}$

By the following definitions:




\((1)\)  

$:$  



Intersection:   





   \(\ds S \cap T \)

  \(\ds := \)  

\(\ds  \set {x \in \Bbb U: \map P x \land \map Q x} \)   

  


\((2)\)  

$:$  



Union:   





   \(\ds S \cup T \)

  \(\ds := \)  

\(\ds  \set {x \in \Bbb U: \map P x \lor \map Q x} \)   

  


\((3)\)  

$:$  



Subset:   





   \(\ds S \subseteq T \)

  \(\ds := \)  

\(\ds  \forall x \in \Bbb U: \map P x \implies \map Q x \)   

  


\((4)\)  

$:$  



Symmetric Difference:   





   \(\ds S \symdif T \)

  \(\ds = \)  

\(\ds  \set {x \in \Bbb U: \map P x \oplus \map Q x} \)   

  


\((5)\)  

$:$  



Complement:   





   \(\ds \relcomp {} S \)

  \(\ds := \)  

\(\ds  \set {x \in \Bbb U: \lnot \map P x} \)   

  


\((6)\)  

$:$  



Set Equality:   





   \(\ds S = T \)

  \(\ds := \)  

\(\ds  \forall x \in \Bbb U: \map P x \iff \map Q x \)   

  

$\blacksquare$


Sources
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $1$: Elementary, my dear Watson: $\S 1.2$: Elements, my dear Watson




