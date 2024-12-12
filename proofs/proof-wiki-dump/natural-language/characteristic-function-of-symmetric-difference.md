# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Symmetric_Difference

Theorem
Let $A, B \subseteq S$.
Then:

$\chi_{A \symdif B} = \chi_A + \chi_B - 2 \chi_{A \cap B}$
where:

$\chi$ denotes characteristic function
$\symdif$ denotes symmetric difference.


Proof
By definition of symmetric difference:

$A \symdif B = \paren {A \cup B} \setminus \paren {A \cap B}$
Thus:

$\chi_{A \symdif B} = \chi_{A \mathop \cup B} - \chi_{\paren {A \mathop \cup B} \mathop \cap \paren {A \mathop \cap B} }$
by Characteristic Function of Set Difference.
But by Intersection is Subset of Union and Intersection with Subset is Subset:

$\paren {A \cup B} \cap \paren {A \cap B} = A \cap B$

Hence it follows that:

$\chi_{A \symdif B} = \chi_{A \mathop \cup B} - \chi_{A \mathop \cap B}$
which by Characteristic Function of Union: Variant 2 becomes:

$\chi_{A \symdif B} = \chi_A + \chi_B - 2 \chi_{A \mathop \cap B}$
as desired.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$: Problem $6 \ \text{(i)}$




