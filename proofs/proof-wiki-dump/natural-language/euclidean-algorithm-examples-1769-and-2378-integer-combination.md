# 

Source: https://proofwiki.org/wiki/Euclidean_Algorithm/Examples/1769_and_2378/Integer_Combination

Examples of Use of Euclidean Algorithm
$6$ can be expressed as an integer combination of $1769$ and $2378$:

$29 = 39 \times 1769 - 29 \times 2378$


Proof
From Euclidean Algorithm: $1769$ and $2378$ we have:




\(\text {(1)}: \quad\)









\(\ds 2378\)

\(=\)







\(\ds 1 \times 1769 + 609\)










\(\text {(2)}: \quad\)









\(\ds 1769\)

\(=\)







\(\ds 2 \times 609 + 551\)










\(\text {(3)}: \quad\)









\(\ds 609\)

\(=\)







\(\ds 1 \times 551 + 58\)










\(\text {(4)}: \quad\)









\(\ds 551\)

\(=\)







\(\ds 9 \times 58 + 29\)










\(\text {(5)}: \quad\)









\(\ds 58\)

\(=\)







\(\ds 2 \times 29\)









and so:

$\gcd \set {1769, 2378} = 29$

Then we have:














\(\ds 29\)

\(=\)







\(\ds 551 - 9 \times 58\)





from $(4)$














\(\ds \)

\(=\)







\(\ds 551 - 9 \times \paren {609 - 1 \times 551}\)





from $(3)$














\(\ds \)

\(=\)







\(\ds 10 \times 551 - 9 \times 609\)





simplifying














\(\ds \)

\(=\)







\(\ds 10 \times \paren {1769 - 2 \times 609} - 9 \times 609\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 10 \times 1769 - 29 \times 609\)





simplifying














\(\ds \)

\(=\)







\(\ds 10 \times 1769 - 29 \times \paren {2378 - 1 \times 1769}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 39 \times 1769 - 29 \times 2378\)





simplifying



$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.3$ The Euclidean Algorithm: Problems $2.3$: $2 \ \text{(d)}$




