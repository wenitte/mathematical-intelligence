# 

Source: https://proofwiki.org/wiki/Cartesian_Product_Distributes_over_Set_Difference

Theorem
Cartesian product is distributive over set difference:

$(1): \quad S \times \paren {T_1 \setminus T_2} = \paren {S \times T_1} \setminus \paren {S \times T_2}$
$(2): \quad \paren {T_1 \setminus T_2} \times S = \paren {T_1 \times S} \setminus \paren {T_2 \times S}$


Proof













\(\ds \)

\(\)







\(\ds \tuple {x, y} \in S \times \paren {T_1 \setminus T_2}\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in S} \land \paren {y \in \paren {T_1 \setminus T_2} }\)





Definition of Cartesian Product














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in S} \land \paren {y \in T_1} \land \paren {y \notin T_2}\)





Definition of Set Difference














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {\tuple {x, y} \in S \times T_1} \land \paren {\tuple {x, y} \notin S \times T_2}\)





Definition of Cartesian Product














\(\ds \)

\(\leadstoandfrom\)







\(\ds \tuple {x, y} \in \paren {S \times T_1} \setminus \paren {S \times T_2}\)





Definition of Set Difference


















\(\ds \)

\(\)







\(\ds \tuple {x, y} \in \paren {T_1 \setminus T_2} \times S\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in \paren {T_1 \setminus T_2} } \land \paren {y \in S}\)





Definition of Cartesian Product














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in T_1} \land \paren {x \notin T_2} \land \paren {y \in S}\)





Definition of Set Difference














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {\tuple {x, y} \in T_1 \times S} \land \paren {\tuple {x, y} \notin T_2 \times S}\)





Definition of Cartesian Product














\(\ds \)

\(\leadstoandfrom\)







\(\ds \tuple {x, y} \in \paren {T_1 \times S} \setminus \paren {T_2 \times S}\)





Definition of Set Difference



$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 6$: Ordered Pairs: Exercise $\text{(iii)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 1$: Fundamental Concepts: Exercise $1.2 \ \text{(o)}$




