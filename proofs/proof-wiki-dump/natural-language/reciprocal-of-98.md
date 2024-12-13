# 

Source: https://proofwiki.org/wiki/Reciprocal_of_98

Theorem
The decimal expansion of the reciprocal of $98$ starts with the powers of $2$:

$\dfrac 1 {98} = 0 \cdotp 0 \dot 1020 \, 40816 \, 32653 \, 06122 \, 44897 \, 95918 \, 36734 \, 69387 \, 75 \dot 5$
This sequence is A021102 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Performing the calculation using long division:

   0.01020408163265306122448979591836734693877551...
  --------------------------------------------------
98)1.00000000000000000000000000000000000000000000000
     98       196     196    490    294    686
     --       ---     ---    ---    ---    ---
      200      640     440    900    460    540
      196      588     392    882    392    490
      ---      ---     ---    ---    ---    ---
        400     520     480    180    680    500
        392     490     392     98    588    490
        ---     ---     ---    ---    ---    ---
          800    300     880    820    920    100
          784    294     784    784    882     98
          ---    ---     ---    ---    ---    ---
           160     600    960    360    380   ...
            98     588    882    294    294
           ---     ---    ---    ---    ---
            620     120    780    660    860
            588      98    686    588    784
            ---     ---    ---    ---    ---
             320     220    940    720    760
             294     196    882    686    686
             ---     ---    ---    ---    ---
              260     240    580    340    740
              196     196    490    294    686


We have that:

$0 \cdotp 01 + 0 \cdotp 0002 + 0 \cdotp 000004 + 0 \cdotp 00000008 + \cdots$
is nothing else but:

$\ds \dfrac 1 2 \paren {\dfrac 1 {50} + \paren {\dfrac 1 {50} }^2 + \paren {\dfrac 1 {50} }^3 + \paren {\dfrac 1 {50} }^4 + \cdots} = \dfrac 1 2 \sum_{k \mathop \ge 1} \paren {\dfrac 1 {50} }^k$

Hence:














\(\ds \dfrac 1 2 \sum_{k \mathop \ge 1} \paren {\dfrac 1 {50} }^k\)

\(=\)







\(\ds \dfrac 1 2 \dfrac {1 / 50} {1 - 1 / 50}\)





Sum of Infinite Geometric Sequence: Corollary 1














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \dfrac 1 {50 - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \dfrac 1 {49}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {98}\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $98$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $98$




