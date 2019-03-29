import colors from '../../constants/Colors';

const styles = {
  container: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSelected: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PrimaryColor,
    borderColor: colors.PrimaryColor,
  },
  line: {
    width: 50,
    height: 1,
    borderWidth: 1,
    marginTop: 48,
  },
  circleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default styles;
