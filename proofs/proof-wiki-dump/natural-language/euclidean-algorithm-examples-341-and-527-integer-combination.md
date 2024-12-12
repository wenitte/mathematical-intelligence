# 

Source: https://proofwiki.org/wiki/Euclidean_Algorithm/Examples/341_and_527/Integer_Combination

Examples of Use of Euclidean Algorithm
$31$ can be expressed as an integer combination of $341$ and $527$:

$31 = 2 \times 527 - 3 \times 341$

Note also that:

$31 = 14 \times 341 - 9 \times 527$
and:

$31 = 13 \times 527 - 20 \times 341$


Proof
From Euclidean Algorithm: $341$ and $527$ we have:




\(\text {(1)}: \quad\)









\(\ds 527\)

\(=\)







\(\ds 1 \times 341 + 186\)










\(\text {(2)}: \quad\)









\(\ds 341\)

\(=\)







\(\ds 1 \times 186 + 155\)










\(\text {(3)}: \quad\)









\(\ds 186\)

\(=\)







\(\ds 1 \times 155 + 31\)




















\(\ds 155\)

\(=\)







\(\ds 5 \times 31\)









and so:

$\gcd \set {341, 527} = 31$

Then we have:














\(\ds 31\)

\(=\)







\(\ds 186 - 1 \times 155\)





from $(3)$














\(\ds \)

\(=\)







\(\ds 186 - 1 \times \paren {341 - 1 \times 186}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 2 \times 186 - 1 \times 341\)




















\(\ds \)

\(=\)







\(\ds 2 \times \paren {527 - 1 \times 341} - 1 \times 341\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 2 \times 527 - 3 \times 341\)









$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Example $\text {2-8}$




