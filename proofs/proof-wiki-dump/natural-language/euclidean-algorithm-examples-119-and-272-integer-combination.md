# 

Source: https://proofwiki.org/wiki/Euclidean_Algorithm/Examples/119_and_272/Integer_Combination

Examples of Use of Euclidean Algorithm
$6$ can be expressed as an integer combination of $119$ and $272$:

$17 = 7 \times 119 - 3 \times 272$


Proof
From Euclidean Algorithm: $119$ and $272$ we have:




\(\text {(1)}: \quad\)









\(\ds 272\)

\(=\)







\(\ds 2 \times 119 + 34\)










\(\text {(2)}: \quad\)









\(\ds 119\)

\(=\)







\(\ds 3 \times 34 + 17\)










\(\text {(3)}: \quad\)









\(\ds 34\)

\(=\)







\(\ds 2 \times 17\)









and so:

$\gcd \set {119, 272} = 17$

Then we have:














\(\ds 17\)

\(=\)







\(\ds 119 - 3 \times 34\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 119 - 3 \times \paren {272 - 2 \times 119}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 7 \times 119 - 3 \times 272\)





simplifying



$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm: Problems $2.3$: $2 \ \text{(c)}$




