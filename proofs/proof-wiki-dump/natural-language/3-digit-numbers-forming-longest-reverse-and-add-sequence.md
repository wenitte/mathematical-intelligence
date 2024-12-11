# 

Source: https://proofwiki.org/wiki/3-Digit_Numbers_forming_Longest_Reverse-and-Add_Sequence



Theorem
Let $m \in \Z_{>0}$ be a positive integer expressed in decimal notation.
Let $r \left({m}\right)$ be the reverse-and-add process on $m$.
Let $r$ be applied iteratively to $m$.

The $3$-digit integers $m$ which need the largest number of iterations before reaching a palindromic number are:

$187, 286, 385, 583, 682, 781, 880$
all of which need $23$ iterations.

$869$ and $968$ are the result of the first iteration for each of these, and so take $22$ iterations to reach a palindromic number.


Proof
The sequence obtained by iterating $r$ on $187$ is:

$187, 968, 1837, 9218, 17347, 91718, 173437, 907808, 1716517, 8872688,$
$17735476, 85189247, 159487405, 664272356, 1317544822, 3602001953, 7193004016, 13297007933,$
$47267087164, 93445163438, 176881317877, 955594506548, 170120002107, 8713200023178$
This sequence is A033670 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

Note that $r \left({187}\right) = r \left({781}\right) = 968$, so the sequence obtained by iterating $r$ on $781$ is the same.
The rest of the numbers converge on the same sequence immediately:

$286, 968, \ldots$
$385, 968, \ldots$
$880, 88, \ldots$
$869, 1837, \ldots$
as do their reversals.
$\blacksquare$


Historical Note
David Wells includes the following quote in his Curious and Interesting Numbers, 2nd ed. of $1997$:

The remaining $75$ numbers can be classified into just a few groups, the members of which after one or two reversals each produce the same number and are therefore essentially the same. One of these groups consists of the numbers $187$, $286$, $385$, $583$, $682$, $781$, $869$, $880$ and $968$, each of which when reversed once or twice forms $1837$ and eventually forms the palindromic number $8,813,200,023,188$ after $23$ reversals.
He attributes this quote to Richard Hamilton, but no reference to it can be found on the internet, apart from its appearance in the above source work, and it has not been possible to corroborate it.

Technically speaking, of course, $869$ and $968$ take just $22$ iterations.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $187$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $196$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $187$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $196$




