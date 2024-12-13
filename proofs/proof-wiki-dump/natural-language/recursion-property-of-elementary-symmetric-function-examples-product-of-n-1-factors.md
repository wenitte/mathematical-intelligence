# 

Source: https://proofwiki.org/wiki/Recursion_Property_of_Elementary_Symmetric_Function/Examples/Product_of_n%2B1_Factors

Examples of Use of Recursion Property of Elementary Symmetric Function
Let $\set {z_1, z_2, \ldots, z_{n + 1} }$ be a set of $n + 1$ numbers, duplicate values permitted.

Then:

$x_{n + 1} \map {e_n} {\set {x_1, x_2, \ldots, x_n} } = \map {e_{n + 1} } {\set {x_1, x_2, \ldots, x_n, x_{n + 1} } }$
where $\map {e_n} {\set {x_1, x_2, \ldots, x_n} }$ denotes the elementary symmetric function of degree $n$ on $\set {z_1, \ldots, z_n}$.


Proof













\(\ds \map {e_m} {\set {z_1, \ldots, z_n, z_{n + 1} } }\)

\(=\)







\(\ds z_{n + 1} \map {e_{m - 1} } {\set {z_1, \ldots, z_n} } + \map {e_m} {\set {z_1, \ldots, z_n} }\)





Recursion Property of Elementary Symmetric Function








\(\ds \leadsto \ \ \)





\(\ds \map {e_{n + 1} } {\set {z_1, \ldots, z_n, z_{n + 1} } }\)

\(=\)







\(\ds z_{n + 1} \map {e_n} {\set {z_1, \ldots, z_n} } + \map {e_{n + 1} } {\set {z_1, \ldots, z_n} }\)





setting $m \gets n + 1$














\(\ds \)

\(=\)







\(\ds z_{n + 1} \map {e_n} {\set {z_1, \ldots, z_n} }\)





Elementary Symmetric Function for $m > n$



$\blacksquare$





