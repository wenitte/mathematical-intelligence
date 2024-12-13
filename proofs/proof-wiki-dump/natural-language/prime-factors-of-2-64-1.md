# 

Source: https://proofwiki.org/wiki/Prime_Factors_of_2%5E64_-_1

Theorem
The prime decomposition of $2^{64} - 1$ is given by:

$2^{64} - 1 = 3 \times 5 \times 17 \times 257 \times 641 \times 65 \, 537 \times 6 \, 700 \, 417$


Proof













\(\ds 2^{64} - 1\)

\(=\)







\(\ds \paren {2^{32} }^2 - 1\)





Power of Power














\(\ds \)

\(=\)







\(\ds \paren {2^{32} + 1} \paren {2^{32} - 1}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {2^{32} + 1} \paren {\paren {2^{16} }^2 - 1}\)





Power of Power














\(\ds \)

\(=\)







\(\ds \paren {2^{32} + 1} \paren {2^{16} + 1} \paren {2^{16} - 1}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {2^{32} + 1} \paren {2^{16} + 1} \paren {\paren {2^8}^2 - 1}\)





Power of Power














\(\ds \)

\(=\)







\(\ds \paren {2^{32} + 1} \paren {2^{16} + 1} \paren {2^8 + 1} \paren {2^8 - 1}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {2^{32} + 1} \paren {2^{16} + 1} \paren {2^8 + 1} \paren {\paren {2^4}^2 - 1}\)





Power of Power














\(\ds \)

\(=\)







\(\ds \paren {2^{32} + 1} \paren {2^{16} + 1} \paren {2^8 + 1} \paren {2^4 + 1} \paren {2^4 - 1}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {2^{32} + 1} \paren {2^{16} + 1} \paren {2^8 + 1} \paren {2^4 + 1} \paren {\paren {2^2}^2 - 1}\)





Power of Power














\(\ds \)

\(=\)







\(\ds \paren {2^{32} + 1} \paren {2^{16} + 1} \paren {2^8 + 1} \paren {2^4 + 1} \paren {2^2 + 1} \paren {2^2 - 1}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {2^{32} + 1} \paren {2^{16} + 1} \paren {2^8 + 1} \paren {2^4 + 1} \paren {2^2 + 1} \paren {2 + 1} \paren {2 - 1}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {2^{\paren {2^5} } + 1} \paren {2^{\paren {2^4} } + 1} \paren {2^{\paren {2^3} } + 1} \paren {2^{\paren {2^2} } + 1} \paren {2^{\paren {2^1} } + 1} \paren {2^{\paren {2^0} } + 1}\)









From Sequence of Fermat Primes:














\(\ds 2^{\paren {2^0} } + 1\)

\(=\)







\(\ds 3\)




















\(\ds 2^{\paren {2^1} } + 1\)

\(=\)







\(\ds 5\)




















\(\ds 2^{\paren {2^2} } + 1\)

\(=\)







\(\ds 17\)




















\(\ds 2^{\paren {2^3} } + 1\)

\(=\)







\(\ds 257\)




















\(\ds 2^{\paren {2^4} } + 1\)

\(=\)







\(\ds 65 \, 537\)









all of which are Fermat primes.
Then:














\(\ds 2^{\paren {2^5} } + 1\)

\(=\)







\(\ds 4 \, 294 \, 967 \, 297\)





Sequence of Fermat Numbers














\(\ds \)

\(=\)







\(\ds 641 \times 6 \, 700 \, 417\)





Prime Decomposition of $5$th Fermat Number



Hence the result.
$\blacksquare$





