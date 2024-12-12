# 

Source: https://proofwiki.org/wiki/Chinese_Remainder_Theorem/Examples/x_%3D_2_mod_3,_3_mod_5,_2_mod_7



Example of use of Chinese Remainder Theorem
Consider the system of simultaneous linear congruences:














\(\ds x\)

\(\equiv\)







\(\ds 2\)

\(\ds \pmod 3\)


















\(\ds x\)

\(\equiv\)







\(\ds 3\)

\(\ds \pmod 5\)


















\(\ds x\)

\(\equiv\)







\(\ds 2\)

\(\ds \pmod 7\)







Then $x \equiv 23 \pmod {105}$


Proof
Using Solution to Chinese Remainder Theorem, we define:














\(\ds N\)

\(=\)







\(\ds 3 \times 5 \times 7\)

\(\ds = 105\)


















\(\ds y_1\)

\(=\)







\(\ds \dfrac {3 \times 5 \times 7} 3\)

\(\ds = 35\)


















\(\ds y_2\)

\(=\)







\(\ds \dfrac {3 \times 5 \times 7} 5\)

\(\ds = 21\)


















\(\ds y_3\)

\(=\)







\(\ds \dfrac {3 \times 5 \times 7} 7\)

\(\ds = 15\)








We require to find $z_1$, $z_2$ and $z_3$ such that:














\(\ds 35 z_1\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 3\)


















\(\ds 21 z_2\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 5\)


















\(\ds 15 z_3\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 7\)








Thus:














\(\ds 35\)

\(=\)







\(\ds 11 \times 3 + 2\)




















\(\ds 3\)

\(=\)







\(\ds 2 \times 1 + 1\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds 3 - 2\)




















\(\ds \)

\(=\)







\(\ds 3 - \paren {35 - 3 \times 11}\)




















\(\ds \)

\(=\)







\(\ds -1 \times 35 + 3 \times 12\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds -1 \times 35\)

\(\ds \pmod 3\)


















\(\ds \)

\(\equiv\)







\(\ds \paren {-1 + 3} \times 35\)

\(\ds \pmod 3\)


















\(\ds \)

\(\equiv\)







\(\ds 2 \times 35\)

\(\ds \pmod 3\)












\(\ds \leadsto \ \ \)





\(\ds z_1\)

\(=\)







\(\ds 2\)
























\(\ds 21\)

\(=\)







\(\ds 4 \times 5 + 1\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds 21 - 4 \times 5\)




















\(\ds \)

\(=\)







\(\ds \paren {-4} \times 5 + 21\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds 1 \times 21\)

\(\ds \pmod 5\)












\(\ds \leadsto \ \ \)





\(\ds z_2\)

\(=\)







\(\ds 1\)
























\(\ds 15\)

\(=\)







\(\ds 2 \times 7 + 1\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds 15 - 2 \times 7\)




















\(\ds \)

\(=\)







\(\ds \paren {-2} \times 7 + 15\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\equiv\)







\(\ds 1 \times 15\)

\(\ds \pmod 7\)












\(\ds \leadsto \ \ \)





\(\ds z_3\)

\(=\)







\(\ds 1\)









Then:














\(\ds x\)

\(=\)







\(\ds \sum_{i \mathop = 1}^3 z_i y_i b_i\)




















\(\ds \)

\(=\)







\(\ds 2 \times 35 \times 2 + 1 \times 21 \times 1 + 1 \times 15 \times 1\)




















\(\ds \)

\(=\)







\(\ds 233\)




















\(\ds \)

\(=\)







\(\ds 2 \times 105 + 23\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\equiv\)







\(\ds 23\)

\(\ds \pmod {105}\)







$\blacksquare$


Also see
Sun Tzu Suan Ching/Examples/Example 2, which is exactly this result


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Chinese remainder theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Chinese remainder theorem




